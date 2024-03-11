import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from './model/slice/profileSlice'
import { ProfileSchema, Profile } from './model/types/profile'
import { ProfileCard } from './ui/ProfileCard/ProfileCard'

export {
  ProfileSchema,
  Profile,
  profileReducer,
  profileActions,
  fetchProfileData,
  ProfileCard,
}
