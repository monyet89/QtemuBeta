const initialState = {
    eventList: [],
    eventtotal: 0,
  }
  
  const eventReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MY_EVENT': 
      return{
        ...state, 
        eventList: action.payload.events, //Dari payload yang di Action
      }
  
      default:
        return state
    }
  }
  
  export default eventReducer