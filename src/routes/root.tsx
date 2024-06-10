import Card from '../components/Card';
import FiltersSubmenu from '../components/Menus/Submenus/Filters';

function Root() {
  const users = ['kanskje'];
  const user = users[Math.floor(Math.random() * users.length)];
  type CardVariation = {
    description: string;
    imageUrl: string;
  };
  type VariableCard = {
    title: string;
    tracksCount: number;
    primaryColor: string;
    variations: {
      [key: string]: CardVariation[];
    };
  };
  const spotifyCards: VariableCard[] = [
    {
      title: 'Daily Mix 1',
      tracksCount: 50,
      primaryColor: '#5DC6F6',
      variations: {
        kanskje: [
          {
            description: 'はるまきごはん, ぬゆり, VocaloKAT and more',
            imageUrl: '/src/assets/artworks/daily1-kanskje-01.png',
          },
          {
            description: '原口沙輔, 柊マグネタイト, 柊キライ and more',
            imageUrl: '/src/assets/artworks/daily1-kanskje-02.png',
          },
          {
            description: 'ハチ, Neru, Giga and more',
            imageUrl: '/src/assets/artworks/daily1-kanskje-03.png',
          },
          {
            description: 'てにをは, バルーン, 和田たけあき, and more',
            imageUrl: '/src/assets/artworks/daily1-kanskje-04.png',
          },
          {
            description: 'sasakure.UK, Toa, 40mP and more',
            imageUrl: '/src/assets/artworks/daily1-kanskje-05.png',
          },
        ],
      },
    },
    {
      title: 'Discover Weekly',
      tracksCount: 30,
      primaryColor: '#F090B8',
      variations: {
        kanskje: [
          {
            description:
              'Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.',
            imageUrl: '/src/assets/artworks/discover-weekly-kanskje.png',
          },
        ],
      },
    },
  ];

  return (
    <div className='px-8'>
      <h1 className='dark:text-fg-primary-dark text-fg-primary py-10 text-6xl'>Juxtify</h1>
      <FiltersSubmenu />
      <div className='flex flex-col gap-[15px] pt-20'>
        <h2 className='text-fg-primary dark:text-fg-primary-dark font-satoshi font-semibold tracking-[0.03rem] sm:text-xl'>
          Made For You
        </h2>
        <div className='flex gap-[11px] overflow-x-scroll'>
          {spotifyCards.map((card, index) => {
            const variationsSelection = card.variations[user];
            const randomVariation =
              variationsSelection[Math.floor(Math.random() * variationsSelection.length)];
            return <Card variant={''} key={index} {...card} {...randomVariation} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Root;
