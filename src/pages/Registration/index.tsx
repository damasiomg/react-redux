import React from 'react';
import QuickRegistration from '../../components/QuickRegistration';
import LoadingPage from '../../components/LoadingPage';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Registration: React.FC = () => {
    const user = useSelector((store: RootState) => store.users);
    return (
        <>
            {!!!user.isLoading ? <QuickRegistration></QuickRegistration> : <LoadingPage/>}
        </>
    )
}

export default Registration;