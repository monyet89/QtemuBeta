import axios from 'axios'

export const addEvent = (events) => ({
    type: 'ADD_MY_EVENT',
    payload:{
        events: events
    }
})

export const fetchEvent = () => {
    return (dispatch) => {
        axios.get('https://swapi.co/api/films/').then(response => {
            const events = response.data.results

dispatch({
    type: 'ADD_MY_EVENT',
    payload:{
        events : events  ///this one should be in reducer 
    }
})

        })
    }

}


/*

axios.get('https://swapi.co/api/films/')
    .then(response => response.data.results)
    .then(filmsData => {
      this.setState({
        events: filmsData
          .slice(0, 3)
          .map(film => ({
            title: film.title,
            owner: film.producer,
            date: film.release_date,
            description: film.opening_crawl,
          }))
      })
    })

*/