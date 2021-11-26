// all reducers no need to export with default option
import { combineReducers } from 'redux'
import { userInfo } from './login/reducers'

const rootReducer = combineReducers({
  userInfo,
})

export default rootReducer
// type of combine reducer
export type RootState = ReturnType<typeof rootReducer>
