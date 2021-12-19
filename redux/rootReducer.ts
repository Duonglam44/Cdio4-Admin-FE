// all reducers no need to export with default option
import { combineReducers } from 'redux'
import { userInfo } from './auth/reducers'
import { accountsManagement } from './accounts/reducers'
import { coursesManagement } from './courses/reducers'
import { categoryManagement } from './category/reducers'

const rootReducer = combineReducers({
  userInfo,
  accountsManagement,
  coursesManagement,
  categoryManagement,
})

export default rootReducer
// type of combine reducer
export type RootState = ReturnType<typeof rootReducer>
