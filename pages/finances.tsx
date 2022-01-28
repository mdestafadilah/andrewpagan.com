import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

type Data = {
  [key: string]: string;
  Date: string;
  Taxes: string;
  Benefits: string;
  Retirement: string;
  'Take Home': string;
  Total: string;
};

const data: Array<Data> = [
  {
    Date: '12/31/2018',
    Taxes: '1,222.84',
    Benefits: '31.77',
    Retirement: '0.00',
    'Take Home': '2,703.72',
    Total: '3,958.33',
  },
  {
    Date: '6/14/2019',
    Taxes: '1,198.90',
    Benefits: '79.74',
    Retirement: '0.00',
    'Take Home': '2,679.69',
    Total: '3,958.33',
  },
  {
    Date: '9/13/2019',
    Taxes: '1,121.62',
    Benefits: '79.74',
    Retirement: '237.50',
    'Take Home': '2,519.47',
    Total: '3,958.33',
  },
  {
    Date: '10/31/2019',
    Taxes: '1,070.57',
    Benefits: '79.74',
    Retirement: '395.83',
    'Take Home': '2,412.19',
    Total: '3,958.33',
  },
  {
    Date: '11/15/2019',
    Taxes: '1,040.94',
    Benefits: '179.73',
    Retirement: '395.83',
    'Take Home': '2,341.83',
    Total: '3,958.33',
  },
  {
    Date: '12/13/2019',
    Taxes: '905.28',
    Benefits: '206.98',
    Retirement: '791.67',
    'Take Home': '2,054.40',
    Total: '3,958.33',
  },
  {
    Date: '1/15/2020',
    Taxes: '912.74',
    Benefits: '153.64',
    Retirement: '791.67',
    'Take Home': '2,100.18',
    Total: '3,958.23',
  },
  {
    Date: '6/15/2020',
    Taxes: '899.96',
    Benefits: '153.74',
    Retirement: '831.25',
    'Take Home': '2,073.38',
    Total: '3,958.33',
  },
  {
    Date: '11/13/2020',
    Taxes: '1,042.16',
    Benefits: '153.74',
    Retirement: '918.75',
    'Take Home': '2,260.35',
    Total: '4,375.00',
  },
  {
    Date: '11/30/2020',
    Taxes: '1,070.37',
    Benefits: '153.74',
    Retirement: '831.25',
    'Take Home': '2,319.64',
    Total: '4,375.00',
  },
  {
    Date: '4/16/2021',
    Taxes: '1,339.87',
    Benefits: '0.00',
    Retirement: '928.34',
    'Take Home': '2,734.70',
    Total: '5,002.91',
  },
  {
    Date: '1/21/2022',
    Taxes: '1,520.36',
    Benefits: '52.94',
    Retirement: '924.46',
    'Take Home': '2,805.94',
    Total: '5,303.70',
  },
];

const options: Highcharts.Options = {
  chart: {
    type: 'column',
  },
  title: {
    text: '',
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
      },
    },
  },
  series: [
    {
      name: 'John',
      type: 'column',
      data: [5, 3, 4, 7, 2],
    },
    {
      name: 'Jane',
      type: 'column',
      data: [2, 2, 3, 2, 1],
    },
    {
      name: 'Joe',
      type: 'column',
      data: [3, 4, 4, 2, 5],
    },
  ],
};

type FormattedData = {
  [key: string]: Array<string> | Array<number>;
  Date: Array<string>;
  Taxes: Array<number>;
  Benefits: Array<number>;
  Retirement: Array<number>;
  'Take Home': Array<number>;
  Total: Array<number>;
};

type Props = {};

const Finances = (props: Props) => {
  const chartComponentRef = React.useRef<HighchartsReact.RefObject>(null);

  const convertMoneyToFloat = (money: string): number => {
    return Number(money.replace(/[^0-9.-]+/g, ''));
  };

  const formatted: FormattedData = {
    Date: [],
    Taxes: [],
    Benefits: [],
    Retirement: [],
    'Take Home': [],
    Total: [],
  };

  data.forEach(d => {
    Object.keys(d).forEach(k => {
      if (k !== 'Date' && k !== 'Total') {
        formatted[k].push(convertMoneyToFloat(d[k]));
      }
    });
  });

  const series: Highcharts.SeriesOptionsType[] = [];

  Object.keys(formatted).forEach(f => {
    if (f !== 'Date' && f !== 'Total') {
      series.push({
        name: f,
        data: formatted[f],
        type: 'column',
      });
    }
  });

  options.series = series;

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      {...props}
    />
  );
};

export default Finances;
