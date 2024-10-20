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
  return (
    <div
      className='flex h-full rounded-md'
      style={{
        background: `linear-gradient(to bottom, ${bgColor}, black)`,
      }}
    >
      <section className='flex w-full flex-col sm:w-3/4'>
        <PlaylistHeader
          title={playlist.title}
          size={playlist.size}
          downloded={playlist.downloded}
          userName={playlist.userName}
          inLibrary={playlist.inLibrary}
          playing={playlist.playing}
          time={playlist.time}
        ></PlaylistHeader>
      </section>

      <SideInfo img={playlist.img} tags={playlist.tags}></SideInfo>
    </div>
  );
}

export default Playlist;
