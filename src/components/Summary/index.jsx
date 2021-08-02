import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import LineChart from '../Charts/LineChart'

const Summary = ({ report, selectedCountry }) => {
  const [mapData, setMapData] = useState([])

  useEffect(() => {
    if (selectedCountry) {
      import(`@highcharts/map-collection/countries/${selectedCountry}`)
        .then((res) => setMapData(res))
    }
  }, [selectedCountry])

  return (
    <Grid container spacing={3}>
      <Grid item sm={12} xs={12}>
        <LineChart data={report} />
      </Grid>
{/* 
      <Grid item sm={4} xs={12}>
        <HighMap mapData={mapData} />
      </Grid> */}
    </Grid>
  )
}

export default Summary
