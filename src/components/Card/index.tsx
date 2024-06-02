
interface CardProps {
  variant: "folder" | "playlist" | "dailyMix" | "album" | "artist" | string;
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
  primaryColor = "",
  description,
  imageUrl,
}: CardProps) {
 
  return (
    <article className="max-w-[170px] shrink-0">
      <div className="max-h-[181px] w-full h-full gap-[2px] flex flex-col mb-[8px]">
      { (variant === "folder" || variant === "album") && (
        <div
          style={{ backgroundColor: primaryColor }}
          className={`${
            variant === "album" ? "w-full" : "w-20"
          } h-[9px] opacity-30 bg-primary-foreground max-w-[154px] ml-2 rounded-md rounded-b-none`}
        />
      )}

        {variant !== "artist" && variant !== "folder"  && variant !== "album" && (
          <>
            <div
              style={{ backgroundColor: primaryColor }}
              className="w-full h-[6px] mx-auto opacity-15 bg-primary-foreground max-w-[133px] rounded-md rounded-b-none"
            />
            <div
              style={{ backgroundColor: primaryColor }}
              className="w-full h-[9px] opacity-30 bg-primary-foreground max-w-[154px] mx-auto rounded-md rounded-b-none"
            />
          </>
        )}
        <img
          className={`w-full h-[170px] mx-auto rounded-md ${variant === "artist" ? "rounded-full" : ""}`}
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className={`flex justify-between ${variant === "artist" ? "justify-center" : ""}`}>
        <div className={`pb-2 truncate text-primary-foreground-dark whitespace-nowrap ${variant === "artist" ? "text-center w-full" : ""}`}>
          {title}
        </div>
        {tracksCount && variant !== "artist" && (
          <div className="font-light" style={{ color: primaryColor }}>
            {tracksCount}
          </div>
        )}
      </div>
      <p className="text-secondary-foreground line-clamp-2 text-[12px]">
        {description}
      </p>
    </article>
  );
}