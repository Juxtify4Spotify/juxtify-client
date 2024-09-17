import { useState } from 'react';
import Pin from '../../../../assets/icons/pin.svg?react';
import Right from '../../../../assets/icons/right.svg?react';

export default function PinItem() {
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
    setIsClicked((prevC: boolean) => !prevC);
  };

  return (
    <article className='flex items-center justify-between gap-2 rounded-lg text-secondary-foreground'>
      <div className='flex items-center gap-2'>
        <section
          onClick={onClick}
          className={`size-10 cursor-pointer ${isClicked ? 'text-accent' : 'text-secondary-foreground'}`}
        >
          <Pin />
        </section>
        Pin
      </div>
      <Right className='fill-secondary-foreground' />
    </article>
  );
}
