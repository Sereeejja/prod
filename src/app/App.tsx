import React, {
    Suspense, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserMounted, userActions } from 'entities/User';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Component = () => {

};

const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const userMounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {userMounted && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
