import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkExtras } from "app/providers/StoreProvider";
import { Comment } from "entity/Comment";



export const getArticleCommentsById = createAsyncThunk<Comment[], string | undefined, { rejectValue: string, extra: AsyncThunkExtras}>(
    'comment/getArticleCommentsById',
    async (articleId, thunkAPI) => {

        if (!articleId) {
            thunkAPI.rejectWithValue('error')
        }

        try {
            const response = await thunkAPI.extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user'
                }
            });

            if (!response.data) {
                throw new Error()
            }

            return response.data;

        } catch {
            return thunkAPI.rejectWithValue('error')
        }
        
    },
)