interface CategoryProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

export default function CategoryFilter({
  title,
  active,
  onClick,
}: CategoryProps) {
  return (
    <button
      onClick={onClick}
      className={`${active ? "text-primary dark:bg-foreground font-medium bg-secondary-foreground hover:dark:bg-neutral-100 hover:bg-black" : "dark:bg-[#202020]/50 hover:bg-[#DADADA] dark:hover:bg-[#202020]/75 bg-secondary"} py-2 text-sm px-4 transition-all outline-primary-foreground tracking-wider rounded-lg`}
    >
      {title}
    </button>
  );
}
