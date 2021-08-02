import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';
import { Button, ButtonGroup } from '@material-ui/core';

const generateOptions = (data) => {
  const categories = data.map((item) => moment(item.Date).format('DD/MM/YYYY'));
  return {
    chart: {
      height: 500,
    },
    title: {
      text: 'Tổng ca nhiễm',
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },
    colors: ['#F3585B'],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: 'right',
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Tổng Ca nhiễm',
        data: data.map((item) => item.Confirmed),
      },
    ],
  };
};


const LineChart = ({ data }) => {
  const [options, setOptions] = useState({});
  const [period, setPeriod] = useState('all');
  console.log({ data })

  useEffect(() => {
    let currentData = [];
    switch (period) {
      case 'all':
        currentData = data;
        break;
      case '30':
        currentData = data.slice(data.length - 30);
        break;
      case '7':
        currentData = data.slice(data.length - 7);
        break;
      default:
        currentData = data;
        break;
    }
    setOptions(generateOptions(currentData))
  }, [data, period])

  return (
    <div>
      <ButtonGroup style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button color={period === 'all' ? 'secondary' : ''} onClick={() => setPeriod('all')}>Tất cả</Button>
        <Button color={period === '30' ? 'secondary' : ''} onClick={() => setPeriod('30')}>30 ngày</Button>
        <Button color={period === '7' ? 'secondary' : ''} onClick={() => setPeriod('7')}>7 ngày</Button>
      </ButtonGroup>

      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}

export default LineChart
