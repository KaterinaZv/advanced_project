import { getUserAuthData } from './model/selector/getUserAuthData/getUserAuthData'
import { getUserInited } from './model/selector/getUserInited/getUserInited'
import { userActions, userReducer } from './model/slice/UserSlice'
import { User, UserSchema } from './model/types/user'

export {
  userReducer,
  userActions,
  User,
  UserSchema,
  getUserAuthData,
  getUserInited,
}
