import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './Sidebar.module.scss'
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

const Sidebar:React.FC<SidebarProps> = ({className}) => {

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed( prev => !prev );
    }

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>Toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                {/* language switch*/}
            </div>
        </div>
    );
};

export default Sidebar;