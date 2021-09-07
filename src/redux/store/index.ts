import {createStore} from 'redux'
import getSearch from '../reducers'

let store = createStore(getSearch)

export default store