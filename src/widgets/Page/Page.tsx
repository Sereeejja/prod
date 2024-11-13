import React, {
    memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { scrollSaveActions } from 'features/ScrollSave/slices/scrollSaveSlice';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { getScrollByPath } from 'features/ScrollSave';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

const Page: React.FC<PageProps> = memo((props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props;
    const dispatch = useAppDispatch();
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const location = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, location.pathname));

    useInfinityScroll({
        callback: onScrollEnd,
        triggerRef,
        wrapperRef,
    });
    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });
    const onScrollHandler = useThrottle((e: React.UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: location.pathname,
        }));
    }, 1000);

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScrollHandler}
        >
            {children}
            {onScrollEnd && (<div ref={triggerRef} className={cls.trigger} />)}
        </section>
    );
});

export default Page;
