import React, { useState } from 'react';
import Down from '../../assets/icons/down.svg?react';
import Right from '../../assets/icons/right.svg?react';
interface DropdownProps {
  title: string;
  initialCollapsed: boolean;
  items: React.ReactNode[];
}

export default function Dropdown({ title, initialCollapsed, items }: DropdownProps) {
  const [collapsed, setCollapsed] = useState(initialCollapsed);
  const onClick = () => {
    setCollapsed((prevC) => !prevC);
  };
  return (
    <div>
      <div onClick={onClick} className='flex w-full cursor-pointer flex-row pb-3.5 pt-3.5'>
        <h3 className='text-fg-primary w-11/12 align-middle font-satoshi text-xl font-semibold'>
          {title}
        </h3>
        {collapsed ? (
          <Right className='fill-secondary-foreground' />
        ) : (
          <Down className='fill-secondary-foreground' />
        )}
      </div>
      {!collapsed && (
        <div className='flex gap-3 overflow-x-scroll'>
          {items.map((item, index) => (
            <div className='shrink-0' key={index}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
