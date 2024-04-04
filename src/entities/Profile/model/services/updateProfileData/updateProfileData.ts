import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile, ValidateProfileError } from '../../types/profile'
import { getProfileForm } from '../../selector/getProfileForm/getProfileForm'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    try {
      const formData = getProfileForm(getState())

      const errors = validateProfileData(formData)

      if (errors.length) {
        return rejectWithValue(errors)
      }
      const response = await extra.api.put<Profile>(
        `/profile/${formData?.id}`,
        formData
      )

      if (!response.data) throw new Error()

      return response.data
    } catch (e) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
  }
)
