interface SideInfoProps {
  img: string;
  tags: string[];
  credits?: string[];
}

export default function SideInfo({ img, tags }: SideInfoProps) {
  return (
    <aside className='mt-20 flex w-full flex-col items-center gap-8 sm:m-0 sm:w-1/4'>
      <img className='w-2/4 rounded-md sm:w-full' src={img} alt='playlist cover' />
      <div className='hidden flex-wrap gap-4 sm:flex'>
        {tags.map((tag) => (
          <p
            key={tag}
            className='cursor-pointer items-center rounded-full border-2 border-primary-foreground px-4 py-2 text-primary-foreground duration-75 ease-in-out hover:border-foreground hover:text-foreground'
          >
            {tag}
          </p>
        ))}
      </div>
    </aside>
  );
}
