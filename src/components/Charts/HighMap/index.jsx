import React from 'react'
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    type: 'line',
    data: [1, 2, 3]
  }]
}



const HightMap = ({mapData}) => {
   
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  )
}

export default HightMap
