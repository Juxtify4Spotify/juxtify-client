// import { useEffect, useState } from 'react';
import PlaylistHeader from '../components/Playlist/PlaylistHeader';
import SideInfo from '../components/Playlist/SideInfo';
import SongList from '../components/Playlist/SongList';
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
  songs: [
    {
      number: 1,
      title: 'Get Lucky',
      author: 'Daft Punk',
      duration: '4:35',
      img: '/src/assets/covers/daft-punk-cover.png',
      album: 'Random Access Memories',
      liked: false,
    },
    {
      number: 2,
      title: 'Instant Crush',
      author: 'Daft Punk, Julian Casablancas',
      duration: '5:37',
      img: '/src/assets/covers/daft-punk-cover.png',
      album: 'Random Access Memories',
      liked: false,
    },
    {
      number: 3,
      title: 'On Melancholy Hill',
      author: 'Gorillaz',
      duration: '5:37',
      img: '/src/assets/covers/gorillaz-cover.png',
      album: 'Plastic Beach',
      liked: false,
    },
    {
      number: 4,
      title: 'Tainted Love',
      author: 'Soft Cell',
      duration: '2:33',
      img: '/src/assets/covers/soft-cell-cover.png',
      album: 'Plastic Beach',
      liked: false,
    },
  ],
};

function Playlist() {
  return (
    <div
      className='flex h-full flex-col gap-6 rounded-md p-4 sm:flex-row-reverse sm:p-8'
      style={{
        background: `linear-gradient(to bottom, ${bgColor}, black)`,
      }}
    >
      <SideInfo img={playlist.img} tags={playlist.tags}></SideInfo>
      <section className='flex w-full flex-col sm:w-4/5'>
        <Header></Header>
        <SongList songs={playlist.songs}></SongList>
      </section>
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

export default Playlist;
