import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING: 
      return {...state, isLoading: true}

    case SET_STORIES:
      return {
        ...state, 
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages
      }
    
    case REMOVE_STORY: 
      const newHits = state.hits.filter(story => story.objectID !== action.payload)

      return {
        ...state,
        hits: newHits
      }
    case HANDLE_SEARCH: 
      return {
        ...state, 
        page: 0,
        query: action.payload
      }

    case HANDLE_PAGE: 
      if (action.payload === "dec") {
        if (state.page > 0 ) {
            return {
              ...state, 
              page: state.page - 1,
          }
        }
        else return {
            ...state, 
              page: 49
        }
      }

      if (action.payload === "inc") { 
        if (state.page < state.nbPages -1 ) {
          return {
            ...state, 
            page: state.page + 1,
        }
        }
        else return {
          ...state, 
          page: 0 
        }
      }
      
    default: 
    throw new Error(`no matching ${action.type} action type`)
  } 


}
export default reducer
