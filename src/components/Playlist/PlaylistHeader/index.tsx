import Dot from '../../../assets/icons/dot.svg?react';
import Play from '../../../assets/icons/play.svg?react';
import Shuffle from '../../../assets/icons/shuffle.svg?react';
import Add from '../../../assets/icons/add.svg?react';
import AddQueue from '../../../assets/icons/add-queue.svg?react';
import Download from '../../../assets/icons/download.svg?react';
import Share from '../../../assets/icons/share.svg?react';
import More from '../../../assets/icons/more.svg?react';
import Search from '../../../assets/icons/search.svg?react';
import Pause from '../../../assets/icons/pause.svg?react';
import CheckFilled from '../../../assets/icons/check-filled.svg?react';
import { useState } from 'react';

interface PlaylistProps {
  title: string;
  userName: string;
  size: number;
  time: string;
  playing: boolean;
  inLibrary: boolean;
  downloded: boolean;
}

export default function PlaylistHeader({
  title,
  userName,
  size,
  time,
  playing,
  inLibrary,
  downloded,
}: PlaylistProps) {
  const [isPlaying, setIsPlaying] = useState(playing);
  const [isInLibrary, setIsInLibrary] = useState(inLibrary);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(downloded);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleLibrary = () => setIsInLibrary(!isInLibrary);
  const toggleShuffle = () => setIsShuffled(!isShuffled);
  const toggleDownload = () => setIsDownloaded(!isDownloaded);

  return (
    <div className='flex flex-col gap-4 p-8 text-foreground'>
      <h1 className='text-5xl font-semibold'>{title}</h1>
      <div className='mt-2 flex items-center gap-3 whitespace-nowrap font-thin'>
        <p>
          By <strong>{userName}</strong>
        </p>
        <Dot className='inline' />
        {size} songs <Dot className='inline' />
        {time}
      </div>
      <div className='flex h-14 gap-3'>
        <button onClick={togglePlay} className='w-10 text-accent'>
          {isPlaying ? <Pause className='size-10' /> : <Play className='size-10' />}
        </button>

        <button onClick={toggleShuffle} className={`${isShuffled ? 'text-accent' : ''}`}>
          <Shuffle />
        </button>

        <button onClick={toggleLibrary}>
          {isInLibrary ? <CheckFilled className='text-accent' /> : <Add />}
        </button>

        <button>
          <AddQueue />
        </button>

        <button onClick={toggleDownload} className={`${isDownloaded ? 'text-accent' : ''}`}>
          <Download />
        </button>

        <button>
          <Share />
        </button>
        <button>
          <More />
        </button>
        <button className='ml-auto'>
          <Search />
        </button>
      </div>
    </div>
  );
}
