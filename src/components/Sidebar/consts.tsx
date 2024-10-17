import Like from '../../assets/icons/like.svg?react';
import Save from '../../assets/icons/save.svg?react';
import Album from '../../assets/icons/album.svg?react';
import Folder from '../../assets/icons/folder.svg?react';
import Podcast from '../../assets/icons/podcast.svg?react';
import Audiobook from '../../assets/icons/audiobook.svg?react';
import Artist from '../../assets/icons/artist.svg?react';

export const MenuItems = [
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

export const PlaylistItems = [
  {
    title: 'Chill n stuff',
    href: '/playlist',
  },
  {
    title: 'Rock n roll',
    href: '/playlist',
  },
];
