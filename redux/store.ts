import { createStore } from "redux"
import {todoReducer} from './reducer/todo'

export const store = createStore(todoReducer)