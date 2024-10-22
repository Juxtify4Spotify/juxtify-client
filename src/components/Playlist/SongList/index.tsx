import PlaylistItem from '../PlaylistItem';

interface SonglistProps {
  songs: {
    title: string;
    author: string;
    duration: string;
    img: string;
    album: string;
    liked: boolean;
  }[];
}

export default function SongList({ songs }: SonglistProps) {
  return (
    <div className='py-3'>
      <div className='mb-4 flex gap-4 border-b-2 border-gray-500/50 py-2 text-sm text-secondary-foreground'>
        <div className='flex items-center px-2'>
          <p className='w-10 text-center'>#</p>
        </div>
        <p className='w-4/12 min-w-36'>Title</p>
        <p className='w-3/12 min-w-36'>Album</p>
        <p className='w-5/12'>Duration</p>
      </div>
      {songs.map((song, i) => (
        <PlaylistItem
          key={i + 1}
          title={song.title}
          album={song.album}
          author={song.author}
          img={song.img}
          duration={song.duration}
          number={i + 1}
          liked={song.liked}
        ></PlaylistItem>
      ))}
    </div>
  );
}
