import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Section from './Section'
import {fetchEvent} from '../actions/event'
import {connect} from 'react-redux'



  class EventList extends React.Component {
    componentDidMount(){
      console.log('Manggil sesutu saat component di render ')
      //2
      this.props.fetchEvent()  
    }
  
      
      render() {    
        const {events} = this.props
        return (
  <Section title="Past Meetups">
    {events.length <= 0 ?
      <CircularProgress />
      :
      <Grid container spacing={16}>
        {events.map(event =>(
          <Grid item xs={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="caption" gutterBottom>
                  {event.date}
                </Typography>
                <Typography variant="title" gutterBottom>
                  {event.title}
                </Typography>
                <Typography>
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
  }
  </Section>
)


}

}
// 1
const mapStatetoProps = state => ({
  events: state.events.eventList
})
const mapDispatchToProps = dispatch => ({
  fetchEvent:() => dispatch(fetchEvent())
})

      
export default connect (mapStatetoProps, mapDispatchToProps)(EventList)
