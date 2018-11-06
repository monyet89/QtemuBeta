import React from 'react'
import Grid from '@material-ui/core/Grid'
import EventDetail from '../components/EventDetail'
import AboutEvent from '../components/AboutEvent'
import MemberList from '../components/MemberList'
import EventList from '../components/EventList'

export default ({ members, events }) => (
  <Grid container spacing={16} style={{ marginTop: 10 }}>
    <Grid item xs={12}>
      <EventDetail
        title="Jakarta JS"
        location="Jakarta, Indonesia"
        members={200}
        organizer="Adhy Wiranata"
      />
    </Grid>
    <Grid item xs={12}>
      <AboutEvent/>
    </Grid>
    <Grid item xs={12}>
      <MemberList members={members}/>
    </Grid>
    <Grid item xs={12}>
      <EventList events={events}/>
    </Grid>
  </Grid>
)