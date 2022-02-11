import React, { useState, FC, ReactElement, useRef } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

type Props = {};

// https://www.highcharts.com/demo/pie-drilldown
const MonthlyBreakdown: FC = (props: Props): ReactElement => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const [options, setOptions] = useState<Highcharts.Options>({
    chart: {
      type: 'pie',
    },
    credits: { enabled: false },
    title: {
      text: 'Monthly Breakdown',
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y:.1f}%',
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      useHTML: true,
      formatter: function () {
        const { point } = this;
        console.log(point);
        return `<span style="color:${point.color}">${point.name}</span>: <b>${point.y}</b> of total<br/><span>$${point.custom.amount}</span>`;
      },
    },
    series: [
      {
        name: 'Monthly',
        type: 'pie',
        colorByPoint: true,
        data: [
          {
            name: 'Total Investments',
            color: '#006f3c',
            custom: {
              amount: 3756.68,
            },
            y: 36.4,
            drilldown: 'investments',
          },
          {
            name: 'Expenses',
            color: '#f9a73e',
            custom: {
              amount: 2165.19,
            },
            y: 21,
            drilldown: 'expenses',
          },
          {
            name: 'Leftover',
            color: '#264b96',
            custom: {
              amount: 1713.33,
            },
            y: 16.6,
            drilldown: 'leftover',
          },
          {
            name: 'Taxes',
            color: '#bf212f',
            custom: {
              amount: 2679.74,
            },
            y: 26.8,
            drilldown: 'taxes',
          },
        ],
      },
    ],
  });

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      {...props}
    />
  );
};

export default MonthlyBreakdown;
