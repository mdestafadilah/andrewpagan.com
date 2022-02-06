type UnformattedPaycheck = {
  date: string;
  taxes: string;
  benefits: string;
  retirement: string;
  takeHome: string;
  total: string;
};

type Paycheck = {
  date: string;
  taxes: number;
  benefits: number;
  retirement: number;
  takeHome: number;
  total: number;
};

const paychecks: Array<UnformattedPaycheck> = [
  {
    date: '12/31/2018',
    taxes: '$1,222.84',
    benefits: '$31.77',
    retirement: '$0.00',
    takeHome: '$2,703.72',
    total: '$3,958.33',
  },
  {
    date: '6/14/2019',
    taxes: '$1,198.90',
    benefits: '$79.74',
    retirement: '$0.00',
    takeHome: '$2,679.69',
    total: '$3,958.33',
  },
  {
    date: '9/13/2019',
    taxes: '$1,121.62',
    benefits: '$79.74',
    retirement: '$237.50',
    takeHome: '$2,519.47',
    total: '$3,958.33',
  },
  {
    date: '10/31/2019',
    taxes: '$1,070.57',
    benefits: '$79.74',
    retirement: '$395.83',
    takeHome: '$2,412.19',
    total: '$3,958.33',
  },
  {
    date: '11/15/2019',
    taxes: '$1,040.94',
    benefits: '$179.73',
    retirement: '$395.83',
    takeHome: '$2,341.83',
    total: '$3,958.33',
  },
  {
    date: '12/13/2019',
    taxes: '$905.28',
    benefits: '$206.98',
    retirement: '$791.67',
    takeHome: '$2,054.40',
    total: '$3,958.33',
  },
  {
    date: '1/15/2020',
    taxes: '$912.74',
    benefits: '$153.64',
    retirement: '$791.67',
    takeHome: '$2,100.18',
    total: '$3,958.23',
  },
  {
    date: '6/15/2020',
    taxes: '$899.96',
    benefits: '$153.74',
    retirement: '$831.25',
    takeHome: '$2,073.38',
    total: '$3,958.33',
  },
  {
    date: '11/13/2020',
    taxes: '$1,042.16',
    benefits: '$153.74',
    retirement: '$918.75',
    takeHome: '$2,260.35',
    total: '$4,375.00',
  },
  {
    date: '11/30/2020',
    taxes: '$1,070.37',
    benefits: '$153.74',
    retirement: '$831.25',
    takeHome: '$2,319.64',
    total: '$4,375.00',
  },
  {
    date: '4/16/2021',
    taxes: '$1,339.87',
    benefits: '$0.00',
    retirement: '$928.34',
    takeHome: '$2,734.70',
    total: '$5,002.91',
  },
  {
    date: '2/3/2022',
    taxes: '$1,463.19',
    benefits: '$52.94',
    retirement: '$902.31',
    takeHome: '$2,889.26',
    total: '$5,307.70',
  },
];

const formatData = (paychecks: Array<UnformattedPaycheck>): Array<Paycheck> => {
  const formatted: Array<Paycheck> = [];

  paychecks.forEach(
    ({ date, taxes, benefits, retirement, takeHome, total }) => {
      formatted.push({
        date,
        taxes: parseInt(taxes.replace(/\$|,/g, '')),
        benefits: parseInt(benefits.replace(/\$|,/g, '')),
        retirement: parseInt(retirement.replace(/\$|,/g, '')),
        takeHome: parseInt(takeHome.replace(/\$|,/g, '')),
        total: parseInt(total.replace(/\$|,/g, '')),
      });
    },
  );

  return formatted;
};

export default formatData(paychecks);
