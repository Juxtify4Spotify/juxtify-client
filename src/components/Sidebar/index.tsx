import Like from '../../assets/icons/like.svg?react';
import Save from '../../assets/icons/save.svg?react';
import Album from '../../assets/icons/album.svg?react';
import Folder from '../../assets/icons/folder.svg?react';
import Podcast from '../../assets/icons/podcast.svg?react';
import Audiobook from '../../assets/icons/audiobook.svg?react';
import Artist from '../../assets/icons/artist.svg?react';
import MenuItem from './MenuItem';
import PlaylistItem from './SidebarItem/PlaylistItem';
import PinItem from './SidebarItem/PinItem';

const MenuItems = [
  {
    title: 'Liked songs',
    href: '/',
    icon: <Like />,
  },
  {
    title: 'Saves',
    href: '/',
    icon: <Save />,
  },
  {
    title: 'Albums',
    href: '/',
    icon: <Album />,
  },
  {
    title: 'Folders',
    href: '/',
    icon: <Folder />,
  },
  {
    title: 'Podcasts',
    href: '/',
    icon: <Podcast />,
  },
  {
    title: 'Audiobooks',
    href: '/',
    icon: <Audiobook />,
  },
  {
    title: 'Artists',
    href: '/',
    icon: <Artist />,
  },
];

const PlaylistItems = [
  {
    title: 'Chill n stuff',
    href: '/',
  },
  {
    title: 'Rock n roll',
    href: '/',
  },
];

interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <main className='flex max-h-[calc(100vh-80px)]'>
      <aside className='ml-2 flex max-h-screen w-[354px] flex-col gap-3 rounded-lg bg-secondary p-4'>
        <PinItem />
        <PlaylistItem title='Playlists' initialCollapsed={true} items={PlaylistItems} />
        {MenuItems.map((item) => (
          <MenuItem key={item.title} title={item.title} href={item.href} icon={item.icon} />
        ))}
      </aside>
      <section className='w-full overflow-y-scroll'>{children}</section>
    </main>
  );
}
