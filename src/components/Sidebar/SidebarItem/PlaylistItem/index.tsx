import { useState } from 'react';
import Down from '../../../../assets/icons/down.svg?react';
import Right from '../../../../assets/icons/right.svg?react';
import Playlist from '../../../../assets/icons/playlist.svg?react';

interface PlaylistItemProps {
  title: string;
  initialCollapsed: boolean;
  items: {
    title: string;
    href: string;
  }[];
}

export default function PlaylistItem({ title, initialCollapsed, items }: PlaylistItemProps) {
  const [collapsed, setCollapsed] = useState(initialCollapsed);

  const onClick = () => {
    setCollapsed((prevC) => !prevC);
  };

  return (
    <div>
      <div
        onClick={onClick}
        className='flex cursor-pointer flex-row items-center justify-between gap-2 text-secondary-foreground'
      >
        <section className='flex items-center gap-2'>
          <section className='size-10'>
            <Playlist />
          </section>
          {title}
        </section>
        {collapsed ? (
          <Right className='fill-secondary-foreground' />
        ) : (
          <Down className='fill-secondary-foreground' />
        )}
      </div>
      {!collapsed && (
        <div className='flex flex-col gap-3 py-2'>
          {items.map((item, index) => (
            <div className='ml-2 flex shrink-0 gap-3 text-secondary-foreground' key={index}>
              <Playlist className='size-8' />
              <a
                href={item.href}
                className='flex items-center gap-2 rounded-lg text-secondary-foreground'
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
