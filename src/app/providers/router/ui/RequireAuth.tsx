import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, Route, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    console.log(auth);
    if (!auth) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        // eslint-disable-next-line react/jsx-no-undef
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
}
