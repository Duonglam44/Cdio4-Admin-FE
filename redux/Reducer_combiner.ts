// all reducers no need to export with default option
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
})

export default rootReducer
// type of combine reducer
export type RootState = ReturnType<typeof rootReducer>
