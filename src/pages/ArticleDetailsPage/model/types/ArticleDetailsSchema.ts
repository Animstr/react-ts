import { EntityState } from "@reduxjs/toolkit";
import { Comment } from "entity/Comment";

export interface ArticleDetailsCommentsSchema extends EntityState<Comment, string> {
    error?: string;
    isLoading: boolean;
}