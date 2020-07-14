import { createStore, combineReducers } from "redux";
import { entries } from './entries'

const state = localStorage.getItem('state')

const store = createStore(combineReducers({ entries }),
    state ? JSON.parse(state) : {}
)

store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()))
})

export default store;