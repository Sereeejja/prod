import React, { Suspense, useCallback, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes, AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import PageLoader from 'widgets/PageLoader/ui/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

const AppRouter = React.memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? (<RequireAuth>{element}</RequireAuth>) : element}
            />
        );
    }, []);
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map((route) => (
                    renderWithWrapper(route)

                ))}
            </Routes>
        </Suspense>
    );
});

export default AppRouter;
