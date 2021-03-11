import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import Link from 'next/link';
import Head from 'next/head';
import TwoColumn from './../../components/Layouts/TwoColumn/TwoColumn';

import styles from './index.module.scss';

interface PostData {
  author: string;
  description: string;
  title: string;
  created: string;
}
interface Post {
  content: string;
  data: PostData;
  filePath: string;
}

interface Posts {
  posts: Post[];
}

const formatPath = (post: Post) => {
  return `/blog/${post.filePath.replace(/\.mdx?$/, '')}`;
};

const BlogTitle: React.FC = () => {
  return <>Blog</>;
};

const BlogPosts = ({ posts }: Posts) => {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.filePath}>
          <Link as={formatPath(post)} href={`/blog/[slug]`}>
            <a className={styles.title}>{post.data.title}</a>
          </Link>
          <p className={styles.description}>{post.data.description}</p>
        </li>
      ))}
    </ul>
  );
};

const index = ({ posts }: Posts) => {
  return (
    <div className={styles.blog}>
      <Head>
        <title>The Blog</title>
      </Head>
      <TwoColumn
        leftColumn={<BlogTitle />}
        rightColumn={<BlogPosts posts={posts} />}
      />
    </div>
  );
};

export default index;

export function getStaticProps() {
  const posts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return { content, data, filePath };
  });

  return { props: { posts } };
}
