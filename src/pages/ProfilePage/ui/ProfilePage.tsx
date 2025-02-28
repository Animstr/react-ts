import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import { getProfile, profileReducer } from 'entity/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileCard } from 'entity/Profile/ui/ProfileCard';

const reducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = ({}) => {
    const{t} = useTranslation();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', [])}>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage