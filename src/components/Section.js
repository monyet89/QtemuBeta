import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { css } from 'emotion'

const styles = {
  paperStyle: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: 'rgba(0,0,0,0.1)',
  }
}

const Section = ({
  title,
  children,
}) => (
  <section>
    <Typography variant="title" gutterBottom>{title}</Typography>
    <Paper className={css(styles.paperStyle)}>
      {children}
    </Paper>
  </section>
)

export default Section