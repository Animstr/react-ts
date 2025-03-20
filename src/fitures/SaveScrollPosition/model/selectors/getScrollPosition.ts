import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

export const getSliderPosition = (state: StateSchema) => state.scroll.scroll;
export const getScrollByPath = createSelector(
    getSliderPosition,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0
)
