// import React, { useEffect, useState } from "react";
import fs from 'fs';
import matter from 'gray-matter';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';
import React from 'react';
import {
  CustomH1,
  CustomH2,
  CustomLink,
  CustomP,
  CustomStrong,
} from '../../components/Blog/BlogMarkdown';
import styles from './[slug].module.scss';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import TwoColumn from '../../components/Layouts/TwoColumn/TwoColumn';
import { IoReturnDownForwardSharp } from 'react-icons/io5';

const components = {
  a: CustomLink,
  h1: CustomH1,
  h2: CustomH2,
  p: CustomP,
  strong: CustomStrong,
};

interface FrontMatter {
  author: string;
  description: string;
  title: string;
  created: string;
}

interface BlogInformationProps {
  frontMatter: FrontMatter;
}

interface BlogPostProps {
  source: string;
  frontMatter: FrontMatter;
}

const BlogInformation: React.FC<BlogInformationProps> = ({ frontMatter }) => {
  const date = new Date(Number(frontMatter.created)),
    createdDate = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;

  return (
    <>
      <Link href="/blog">
        <a className={styles.crumb}>Blog</a>
      </Link>

      <p className={styles.title}>
        <IoReturnDownForwardSharp /> {frontMatter.title}
      </p>
      <p className={styles.date}>{createdDate}</p>
    </>
  );
};

const BlogPost: React.FC<BlogPostProps> = ({ source, frontMatter }) => {
  // temp bandaid since it's driving me insane
  // @ts-ignore
  const content = hydrate(source, { components });

  return (
    <div className={styles['blog-post']}>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <TwoColumn
        leftColumn={<BlogInformation frontMatter={frontMatter} />}
        rightColumn={<main className={styles['section-info']}>{content}</main>}
      />
    </div>
  );
};

export default BlogPost;

interface Slug {
  slug: string;
}

interface Params {
  params: Slug;
}

export const getStaticProps = async ({ params }: Params) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug } }));
  // How is it reducing it to one?
  return {
    paths,
    fallback: false,
  };
};
