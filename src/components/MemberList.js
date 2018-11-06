import React from 'react'
import Section from './Section'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Link } from 'react-router-dom'
import { fetchMember } from '../actions/member'
import { connect } from 'react-redux'


const styles = {
  avatarStyle: {
    backgroundColor: 'blue'
  }
}

class MemberList extends React.Component {
  componentDidMount(){
console.log('Manggil sesutu saat component di render ')
//2
this.props.fetchMember()  
  }


render() { 

  const {members} = this.props
  return (

    <Section title="Members">
    {members.length <= 0 ?
      <CircularProgress />
      :
      <List>
        {members.map((member, index) => (
          <Link key={member.name} to={`/user/${index + 1}`}>
            <ListItem button>
              <Avatar style={styles.avatarStyle}>{member.name[0].toUpperCase()}</Avatar>
              <ListItemText primary={member.name} secondary={member.tahunLahir} />
            </ListItem>
          </Link>
        ))}
      </List>
    }
  </Section>
  )
}

}

// 1
const mapStatetoProps = state => ({
  members: state.members.userData
})

const mapDispatchToProps = dispatch => ({
  fetchMember:() => dispatch(fetchMember())
})

export default connect (mapStatetoProps, mapDispatchToProps)(MemberList)