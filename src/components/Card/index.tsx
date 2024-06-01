interface CardProps {
  title: string;
  tracksCount?: number;
  description: string;
  primaryColor?: string;
  imageUrl?: string;
}

export default function Card({
  title,
  tracksCount,
  primaryColor = "",
  description,
  imageUrl,
}: CardProps) {
  return (
    <article className="max-w-[170px] shrink-0">
      <div className="max-h-[170px] w-full h-full gap-[2px] flex flex-col">
        <div
          style={{ backgroundColor: primaryColor }}
          className="w-full h-[6px] mx-auto opacity-15 bg-fg-primary-dark max-w-[133px] rounded-md rounded-b-none"
        />
        <div
          style={{ backgroundColor: primaryColor }}
          className="w-full h-[9px] opacity-30 bg-fg-primary-dark max-w-[154px] mx-auto rounded-md rounded-b-none"
        />
        <img
          className="w-full h-full max-h-[154px] mx-auto rounded-md"
          src={imageUrl}
        />
      </div>
      <div className="flex justify-between">
        <div className="dark:text-fg-primary-dark text-fg-primary whitespace-nowrap truncate pb-2">
          {title}
        </div>
        {tracksCount && (
          <div className="font-light" style={{ color: primaryColor }}>
            {tracksCount}
          </div>
        )}
      </div>
      <p className="dark:text-fg-secondary text-fg-secondary-dark line-clamp-2">
        {description}
      </p>
    </article>
  );
}
