import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SaveScrollPosition } from '../types/saveScrollPosition';


const initialState: SaveScrollPosition = {
    scroll: {}
}

export const scrollPositionSlice = createSlice({
    name: 'scrollPosition',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{path: string, scroll: number}>) => {
            state.scroll[action.payload.path] = action.payload.scroll
        }
    },
})

// Action creators are generated for each case reducer function
export const { actions: scrollPositionActions } = scrollPositionSlice;

export const { reducer: scrollPositionReducer } = scrollPositionSlice;