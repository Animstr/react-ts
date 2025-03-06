import { UserSchema, User } from "./model/types/userSchema";
import { userReducer, userActions } from "./model/slice/UserSlice";
import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
import { getUserInited } from "./model/selectors/getUserInited/getUserInited";

export {
    UserSchema,
    User,
    userActions,
    userReducer,
    getUserAuthData,
    getUserInited
}