import { MenuItems, PlaylistItems } from './consts';
import MenuItem from './MenuItem';
import PlaylistItem from './SidebarItem/PlaylistItem';
import PinItem from './SidebarItem/PinItem';

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
