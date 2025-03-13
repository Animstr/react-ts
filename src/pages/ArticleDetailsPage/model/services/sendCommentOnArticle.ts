import { createAsyncThunk } from "@reduxjs/toolkit"
import { AsyncThunkExtras, StateSchema } from "app/providers/StoreProvider";
import { Comment } from "entity/Comment";
import { getUserAuthData } from "entity/User";
import { getArticleDetailsData } from "entity/Article";
import { getArticleCommentsById } from "./getArticleCommentsById";

export const sendCommentOnArticle = createAsyncThunk<Comment, string, { rejectValue: string, extra: AsyncThunkExtras}>(
    'addCommentForm/sendComment',
    async (text, thunkAPI)  => {
        const {getState, rejectWithValue, dispatch} = thunkAPI;

        const userData = getUserAuthData(getState() as StateSchema);
        const article = getArticleDetailsData(getState() as StateSchema);

        if (!userData || !text || !article) {
            return rejectWithValue('no data')
        }

        try {
            const response = await thunkAPI.extra.api.post<Comment>('/comments', {
                articleId: article.id,
                text,
                userId: userData.id
            })

            if (!response.data) {
                throw new Error()
            }

            dispatch(getArticleCommentsById(article.id))

            return response.data;

        } catch {
            return rejectWithValue('error')
        }
        
    },
)