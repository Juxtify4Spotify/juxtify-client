import Like from '../../../assets/icons/like.svg?react';
import LikeFilled from '../../../assets/icons/like-filled.svg?react';
import AddPlaylist from '../../../assets/icons/add-playlist.svg?react';
import More from '../../../assets/icons/more.svg?react';
import Play from '../../../assets/icons/play-simple.svg?react';
import Pause from '../../../assets/icons/pause-simple.svg?react';

import Check from '../../../assets/icons/check.svg?react';
import CheckFilled from '../../../assets/icons/check-filled.svg?react';
import { useState } from 'react';

interface PlaylistItemProps {
  number: number;
  title: string;
  author: string;
  duration: string;
  img: string;
  album: string;
  liked: boolean;
}

export default function PlaylistItem({
  number,
  title,
  author,
  duration,
  img,
  album,
  liked,
}: PlaylistItemProps) {
  const [isSelected, setSelected] = useState(false);
  const [isLiked, setIsLiked] = useState(liked);
  const [isPlayed, setIsPlayed] = useState(false);

  const togglePlayed = () => {
    setIsPlayed(!isPlayed);
  };
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  const toggleSelected = () => {
    setSelected(!isSelected);
  };

  return (
    <div className='group flex items-center gap-4 rounded-md py-2.5 text-sm text-secondary-foreground duration-100 ease-in-out hover:bg-gray-500/10'>
      {isPlayed ? ( // If is playing, show pause button
        <div className='flex items-center px-2'>
          <button className='text-accent' onClick={togglePlayed}>
            <Pause className='h-10 w-10'></Pause>
          </button>
        </div>
      ) : (
        // If is not playing, show play button only when parent hover
        <div className='flex items-center px-2'>
          <button className='hidden text-accent group-hover:inline' onClick={togglePlayed}>
            <Play className='h-10 w-10'></Play>
          </button>
          <p className='text-[14px font-medium] h-min w-10 text-center group-hover:hidden'>
            {number}
          </p>
        </div>
      )}

      <div className='flex h-12 w-4/12 min-w-36 gap-4'>
        <img src={img} alt='Song cover' className='h-12 w-12' />
        <div className='flex flex-col gap-1 overflow-x-hidden'>
          <h2 className='truncate font-medium text-foreground'>{title}</h2>
          <p className='truncate'>{author}</p>
        </div>
      </div>
      <p className='w-3/12 min-w-36 truncate'>{album}</p>

      {/* group of hidden buttons */}
      <div className='flex w-5/12 items-center justify-between'>
        <p>{duration}</p>

        <button onClick={toggleLike} className='ml-6 mr-2 w-min hover:text-foreground'>
          {isLiked ? <LikeFilled className='text-accent' /> : <Like />}
        </button>
        <div className='invisible flex gap-2 group-hover:visible'>
          <button className='hover:text-foreground'>
            <AddPlaylist />
          </button>
          <button className='hover:text-foreground'>
            <More></More>
          </button>
        </div>
        {isSelected ? (
          <button onClick={toggleSelected} className='ml-auto px-2'>
            <CheckFilled className='text-accent'></CheckFilled>
          </button>
        ) : (
          <button
            onClick={toggleSelected}
            className='invisible ml-auto px-2 hover:text-foreground group-hover:visible'
          >
            <Check></Check>
          </button>
        )}
      </div>
    </div>
  );
}
