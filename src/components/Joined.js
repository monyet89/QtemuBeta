import React from 'react'
import Typography from '@material-ui/core/Typography'

class Joined extends React.Component {
  componentWillUnmount() {
    console.log('Mati')
  }

  componentWillMount() {
    console.log('Sebelum Lahir')
  }

  componentDidMount() {
    console.log('Setelah Lahir')
  }

  render() {
    console.log('Lahiran')

    return (
      <Typography variant="title" color="primary">
        JOINED
      </Typography>
    )
  }
}

export default Joined