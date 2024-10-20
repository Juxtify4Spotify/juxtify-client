interface SideInfoProps {
  img: string;
  tags: string[];
  credits?: string[];
}

export default function SideInfo({ img, tags }: SideInfoProps) {
  return (
    <aside className='hidden h-full w-1/4 flex-col gap-8 p-5 sm:flex'>
      <img className='rounded-md' src={img} alt='playlist cover' />
      <div className='flex flex-wrap gap-4'>
        {tags.map((tag) => (
          <p
            key={tag}
            className='hover:text-foreground+d cursor-pointer items-center rounded-full border-2 border-primary-foreground px-4 py-2 text-primary-foreground duration-75 ease-in-out hover:border-foreground'
          >
            {tag}
          </p>
        ))}
      </div>
    </aside>
  );
}
