import React from 'react';
import QuickRegistration from '../../components/QuickRegistration';
import LoadingPage from '../../components/LoadingPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setLoadingState } from '../../store/Users/Users.actions';

const Registration: React.FC = () => {
    const dispatch = useDispatch();
    const user = useSelector((store: RootState) => store.users);
    return (
        <>
            {!!!user.isLoading ? <QuickRegistration></QuickRegistration> : <LoadingPage/>}
        </>
    )
}

export default Registration;