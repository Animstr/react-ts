
export { Profile, ProfileSchema } from './model/types/profile';

export { profileReducer, profileActions} from './model/slice/ProfileSlice';

export { getProfile } from './model/services/getProfile/getProfile'

export {getProfileData} from './model/sellectors/getProfileData/getProfileData';

export {getProfileError} from './model/sellectors/getProfileError/getProfileError';

export {getProfileIsLoading} from './model/sellectors/getProfileIsLoading/getProfileIsLoading';

export {getProfileReadonly} from './model/sellectors/getProfileReadonly/getProfileReadonly';

export {getProfileForm} from './model/sellectors/getProfileForm/getProfileForm';

export {saveData} from './model/services/saveData/saveData'