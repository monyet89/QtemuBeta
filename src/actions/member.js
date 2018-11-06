import axios from 'axios'

export const addMember = (members) => ({
    type: 'Add_members',
    payload:{
        members: members
    }
})

export const fetchMember = () => {
    return (dispatch) => {
        axios.get('https://swapi.co/api/people/').then(response => {
            const members = response.data.results

dispatch({
    type: 'Add_members',
    payload:{
        members : members
    }
})

        })
    }

}