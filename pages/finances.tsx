import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

type Props = {};

const options: Highcharts.Options = {
  chart: {
    type: 'column',
  },
  title: {
    text: 'Stuff',
  },
  xAxis: {
    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total fruit consumption',
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: 'bold',
        color: 'gray',
      },
    },
  },
  legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor: 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false,
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
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
      type: 'line',
      data: [5, 3, 4, 7, 2],
    },
    {
      name: 'Jane',
      type: 'line',
      data: [2, 2, 3, 2, 1],
    },
    {
      name: 'Joe',
      type: 'line',
      data: [3, 4, 4, 2, 5],
    },
  ],
};

const Finances = (props: Props) => {
  const chartComponentRef = React.useRef<HighchartsReact.RefObject>(null);

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
