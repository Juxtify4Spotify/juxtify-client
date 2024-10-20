import { useEffect, useState } from 'react';
import PlaylistHeader from '../components/Playlist/PlaylistHeader';
import SideInfo from '../components/Playlist/SideInfo';
const bgColor = '#3B4FB6';

const playlist = {
  title: 'Chill n stuff',
  size: 40,
  downloded: false,
  userName: 'dabi',
  inLibrary: false,
  playing: false,
  time: '50 min',
  img: '/src/assets/artworks/daily1-kanskje-01.png',
  tags: ['Chill', 'Pop', 'Relax', 'Soft Rock'],
};

function Playlist() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className='flex h-full gap-6 rounded-md p-4 sm:p-8'
      style={{
        background: `linear-gradient(to bottom, ${bgColor}, black)`,
      }}
    >
      {isSmallScreen ? (
        <>
          <section className='flex flex-col gap-6'>
            <Aside></Aside>
            <Header></Header>
          </section>
        </>
      ) : (
        <>
          <section className='flex w-3/4'>
            <Header></Header>
          </section>
          <Aside></Aside>
        </>
      )}
    </div>
  );
}

const Header = () => (
  <PlaylistHeader
    title={playlist.title}
    size={playlist.size}
    downloded={playlist.downloded}
    userName={playlist.userName}
    inLibrary={playlist.inLibrary}
    playing={playlist.playing}
    time={playlist.time}
  ></PlaylistHeader>
);

const Aside = () => <SideInfo img={playlist.img} tags={playlist.tags}></SideInfo>;

export default Playlist;
