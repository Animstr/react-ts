import { User } from "entity/User";

export interface Comment {
    id: string,
    text: string,
    articleId: string,
    user: User
}