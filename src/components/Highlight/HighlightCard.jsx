import { Card, CardContent, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import CountUp from 'react-countup'

const useStyles = makeStyles({
  wrapper: (props) => {
    switch (props.type) {
      case 'confirmed': return { borderRight: '10px solid #c9302c' }
      case 'recovered': return { borderRight: '10px solid #28a745' }
      default: return { borderRight: '10px solid gray' }
    }
  },
  title: {
    fontSize: 18, marginBottom: 5
  },
  count: {
    fontWeight: 'bold', fontSize: 18
  }
})

const HighlightCard = ({ title, count, type }) => {
  const styles = useStyles({ type })
  return (
    <Card className={styles.wrapper}>
      <CardContent>
        <Typography components="p" className={styles.title}>{title}</Typography>
        <Typography components="span" className={styles.count}>
          <CountUp end={count || 0} duration={2} separator=' ' />
        </Typography>
      </CardContent>
    </Card>
  )
}

export default HighlightCard
