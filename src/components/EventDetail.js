import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Section from './Section'
import Joined from './Joined'
import { connect } from 'react-redux'
import { changePageTitle } from '../actions/app'

class EventDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      joined: false
    }
  }

  handleClick = () => {
    this.setState(state => ({
      joined: !state.joined
    }))
  }

  render() {
    const {
      title,
      location,
      members,
      organizer
    } = this.props

    return (
      <Section>
        <Grid container spacing={16}>
          <Grid item xs={3}>
            <img src="https://placeimg.com/640/640/any" width="100%"/>
          </Grid>
          <Grid item xs>
            <Typography variant="title" gutterBottom>{title}</Typography>
            <Typography gutterBottom>{`Location: ${location}`}</Typography>
            <Typography gutterBottom>{`Member: ${members}`}</Typography>
            <Typography gutterBottom>{`Organizer: ${organizer}`}</Typography>
            <Button
              variant="raised"
              color="secondary"
              onClick={this.handleClick}
            >
              {this.state.joined ? "Joined" : "Join Us" }
            </Button>

            {this.state.joined && <Joined />}

            <Button variant="outlined" onClick={() => this.props.magicButton('qtmuan kuy')}>
              Magic Button
            </Button>

          </Grid>
        </Grid>
      </Section>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    magicButton: (judulBaru) => dispatch(changePageTitle(judulBaru)),
  }
}

EventDetail = connect(null, mapDispatchToProps)(EventDetail)

export default EventDetail