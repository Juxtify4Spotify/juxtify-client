interface CardProps {
  variant: 'folder' | 'playlist' | 'dailyMix' | 'album' | 'artist' | string;
  title: string;
  tracksCount?: number;
  description: string;
  primaryColor?: string;
  imageUrl?: string;
}

export default function Card({
  variant,
  title,
  tracksCount,
  primaryColor = '',
  description,
  imageUrl,
}: CardProps) {
  return (
    <article className='min-h-[260px] max-w-[170px] shrink-0'>
      <div className='mb-[8px] flex h-full max-h-[181px] w-full flex-col gap-[2px]'>
        {(variant === 'folder' || variant === 'album') && (
          <div
            style={{ backgroundColor: primaryColor }}
            className={`${
              variant === 'album' ? 'w-full' : 'w-20'
            } ml-2 h-[9px] max-w-[154px] rounded-md rounded-b-none bg-primary-foreground opacity-30`}
          />
        )}

        {variant !== 'artist' && variant !== 'folder' && variant !== 'album' && (
          <>
            <div
              style={{ backgroundColor: primaryColor }}
              className='mx-auto h-[6px] w-full max-w-[133px] rounded-md rounded-b-none bg-primary-foreground opacity-15'
            />
            <div
              style={{ backgroundColor: primaryColor }}
              className='mx-auto h-[9px] w-full max-w-[154px] rounded-md rounded-b-none bg-primary-foreground opacity-30'
            />
          </>
        )}
        <img
          className={`mx-auto h-[170px] w-full rounded-md ${variant === 'artist' ? 'rounded-full' : ''}`}
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className={`flex justify-between ${variant === 'artist' ? 'justify-center' : ''}`}>
        <div
          className={`text-primary-foreground-dark truncate whitespace-nowrap pb-2 ${variant === 'artist' ? 'w-full text-center' : ''}`}
        >
          {title}
        </div>
        {tracksCount && variant !== 'artist' && (
          <div className='font-light' style={{ color: primaryColor }}>
            {tracksCount}
          </div>
        )}
      </div>
      <p className='line-clamp-2 text-[12px] text-secondary-foreground'>{description}</p>
    </article>
  );
}
