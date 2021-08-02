import { Grid } from '@material-ui/core'
import React from 'react'
import HighlightCard from './HighlightCard'

const Highlight = ({ report }) => {
  const data = report[report.length - 1]
  const values = [
    {
      title: 'Số ca nhiễm',
      count: data?.Confirmed | 0,
      type: 'confirmed'
    },
    {
      title: 'Số ca khỏi',
      count: data?.Recovered | 0,
      type: 'recovered'
    },
    {
      title: 'Số ca tử vong',
      count: data?.Deaths | 0,
      type: 'deaths'
    },
  ]



  return (
    <Grid container spacing={3}>
      {values?.map((item) => {
        return (
          <Grid item sm={4} xs={12} key={item.type}>
            <HighlightCard {...item} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Highlight
