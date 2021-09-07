import { combineReducers } from 'redux'
import { SEARCH_VALUE } from '../actions'

function handleValue(state = SEARCH_VALUE, action) {
  return state
}

const getSearch =  combineReducers({
  handleValue,
})
export default getSearch