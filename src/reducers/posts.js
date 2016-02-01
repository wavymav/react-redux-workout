import { FETCH_POSTS } from '../constants'
const initialState = {
  all: [],
  post: null
}

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        all: action.payload.data
      }
    default:
      return state
  }
}
