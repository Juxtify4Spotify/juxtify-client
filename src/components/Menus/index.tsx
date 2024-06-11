import Discover from '../../assets/icons/discover.svg?react';

function Menu() {
  return (
    <nav className='flex h-20 w-full p-2 font-medium'>
      <div className='flex h-full w-72 items-center gap-3 rounded-lg bg-secondary p-4 text-foreground'>
        <Discover className='text-foreground' />
        <p>Discover</p>
      </div>
    </nav>
  );
}

export default Menu;
