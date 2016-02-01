import axios from 'axios'

import { FETCH_POSTS } from '../constants';

const API_KEY = '?key=amgkoghjm5ejgegihkonwb'
const ROOT_URL = 'http://reduxblog.herokuapp.com/api'

export const fetchPosts = () => {
  const request = axios.get(`${ ROOT_URL }/posts${ API_KEY }`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}
