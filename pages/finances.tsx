import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import paychecks from '@public/paychecks';
import MonthlyBreakdown from '@components/finances/MonthlyBreakdown';

const options: Highcharts.Options = {
  chart: {
    type: 'column',
    height: 800,
  },
  credits: { enabled: false },
  colors: ['#FF4B3E', '#263D42', '#449DD1', '#BBD8B3'],
  title: {
    text: 'Paycheck Breakdown over Time',
  },
  plotOptions: {
    column: {
      states: {
        inactive: {
          opacity: 1,
        },
      },
      stacking: 'normal',
      dataLabels: {
        enabled: true,
      },
    },
  },
};

type Props = {};

const Finances: React.FC = (props: Props): React.ReactElement => {
  const chartComponentRef = React.useRef<HighchartsReact.RefObject>(null);

  const getFormattedDate = (date: Date): string => {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return month + '/' + day + '/' + year;
  };

  const seperated: Record<string, Array<number | string>> = {
    date: [],
    taxes: [],
    benefits: [],
    retirement: [],
    takeHome: [],
    total: [],
  };

  const translation: Record<string, string> = {
    taxes: 'Taxes',
    benefits: 'Benefits',
    retirement: 'Retirement',
    takeHome: 'Take Home',
  };

  paychecks.forEach(p => {
    Object.keys(seperated).forEach(key => {
      if (key === 'date') {
        seperated[key].push(p[key]);
      } else {
        seperated[key].push(parseInt(p[key].toString()));
      }
    });
  });

  const series: Highcharts.SeriesOptionsType[] = [];

  Object.keys(seperated).forEach(f => {
    if (f !== 'date' && f !== 'total') {
      series.push({
        name: translation[f],
        data: seperated[f],
        type: 'column',
      });
    }
  });

  options.series = series;
  options.xAxis = {
    categories: seperated.date.map(date => {
      return getFormattedDate(new Date(date));
    }),
  };

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        {...props}
      />
      <MonthlyBreakdown />
    </>
  );
};

export default Finances;
