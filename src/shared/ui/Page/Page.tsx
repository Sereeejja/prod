import React, {memo} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Page.module.scss'
import {useTranslation} from 'react-i18next';

interface PageProps {
    className?: string;
}

const Page:React.FC<PageProps> = memo((props: PageProps) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;
    
    return (
        <div className={classNames(cls.Page, {}, [className])}>
            text
        </div>
    );
});

export default Page;