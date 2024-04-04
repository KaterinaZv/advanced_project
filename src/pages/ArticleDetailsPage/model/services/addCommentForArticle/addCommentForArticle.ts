import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'
import { getUserAuthData } from 'entities/User'
import { getArticleDetailsData } from 'entities/Article/model/selector/articleDetails'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'articleDetailsPage/addCommentForArticle',
  async (text, { dispatch, extra, rejectWithValue, getState }) => {
    const userData = getUserAuthData(getState())
    const article = getArticleDetailsData(getState())

    if (!userData || !text || !article) return rejectWithValue('no data')

    try {
      const response = await extra.api.post<Comment>('/comments', {
        text,
        articleId: article.id,
        userId: userData.id,
      })

      if (!response.data) throw new Error()

      dispatch(fetchCommentsByArticleId(article.id))

      return response.data
    } catch (e) {
      return rejectWithValue('Wrong username or password')
    }
  }
)
