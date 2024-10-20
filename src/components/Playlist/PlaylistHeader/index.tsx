import Dot from '../../../assets/icons/dot.svg?react';
import Play from '../../../assets/icons/play.svg?react';
import Shuffle from '../../../assets/icons/shuffle.svg?react';
import Add from '../../../assets/icons/add.svg?react';
import AddQueue from '../../../assets/icons/add-queue.svg?react';
import AddPlaylist from '../../../assets/icons/add-playlist.svg?react';
import Download from '../../../assets/icons/download.svg?react';
import Share from '../../../assets/icons/share.svg?react';
import More from '../../../assets/icons/more.svg?react';
import Search from '../../../assets/icons/search.svg?react';
import Pause from '../../../assets/icons/pause.svg?react';
import CheckFilled from '../../../assets/icons/check-filled.svg?react';
import Sort from '../../../assets/icons/sort.svg?react';
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
    <div className='flex flex-col gap-4 p-8 text-secondary-foreground'>
      <h1 className='text-lg font-semibold text-foreground sm:text-5xl'>{title}</h1>
      <div className='flex items-center gap-3 whitespace-nowrap sm:mt-2'>
        <p>
          By <span className='text-foreground'>{userName}</span>
        </p>
        <Dot className='inline size-1' />
        <p>{size} songs</p>
        <Dot className='inline size-1' />
        <p>{time}</p>
      </div>
      <div className='flex h-14 flex-row-reverse justify-between gap-3 sm:flex-row'>
        <div className='flex flex-row-reverse gap-3 sm:flex-row'>
          <button onClick={togglePlay} className='w-10 text-accent'>
            {isPlaying ? <Pause className='size-10' /> : <Play className='size-10' />}
          </button>

          <button onClick={toggleShuffle} className={`${isShuffled ? 'text-accent' : ''}`}>
            <Shuffle className='hover:text-foreground' />
          </button>
        </div>

        <div className='flex gap-3'>
          <button onClick={toggleLibrary} className='hidden sm:inline'>
            {isInLibrary ? (
              <CheckFilled className='text-accent' />
            ) : (
              <Add className='hover:text-foreground' />
            )}
          </button>

          <button className='inline sm:hidden'>
            <AddPlaylist />
          </button>

          <button>
            <AddQueue className='hover:text-foreground' />
          </button>

          <button onClick={toggleDownload} className={`${isDownloaded ? 'text-accent' : ''}`}>
            <Download className='hover:text-foreground' />
          </button>

          <button className='hidden sm:inline'>
            <Share className='hover:text-foreground' />
          </button>
          <button>
            <More className='hover:text-foreground' />
          </button>
        </div>
        {/* Search bar */}
        <div className='fixed left-0 top-0 m-2 flex w-full justify-center sm:relative sm:right-0 sm:m-0'>
          <div className='sm:4/4 flex w-3/4 rounded-md bg-gray-500/20 px-4 sm:w-full sm:bg-transparent sm:px-0'>
            <input
              type='text'
              className='inline w-full min-w-8 bg-transparent focus:outline-none sm:hidden'
              placeholder='Search'
            />
            <button className='ml-auto'>
              <Search className='hover:text-foreground' />
            </button>
          </div>
          <Sort className='inline sm:hidden' />
        </div>
      </div>
    </div>
  );
}
