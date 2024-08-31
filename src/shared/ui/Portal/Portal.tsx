import React, { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { createPortal } from 'react-dom';
import * as cls from './Portal.module.scss';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

const Portal:React.FC<PortalProps> = (props: PortalProps) => {
    const {
        children,
        element = document.body,
    } = props;
    return createPortal(children, element);
};

export default Portal;
