import React from 'react'
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

export default class User extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userData: null
    }
  }

  componentDidMount() {
    const { match } = this.props
    axios.get(`https://swapi.co/api/people/${match.params.id}`)
      .then( ({ data }) => {
        this.setState({
          userData: data
        })
      })
  }
  
  render() {
    const { userData } = this.state

    return userData ? (
      <Grid container>
        <Grid item xs={4}>
          <Avatar 
            style={{
              width: 200,
              height: 200,
              fontSize: 80
            }}
          >
            {userData.name.slice(0,2).toUpperCase()}
          </Avatar>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6">
            {userData.name}
          </Typography>
          <Typography variant="h6">
            Birth Year: {userData.birth_year}
          </Typography>
          <Typography variant="h6">
            Gender: {userData.gender}
          </Typography>
        </Grid>
      </Grid>
    ) : <CircularProgress />
  }
}