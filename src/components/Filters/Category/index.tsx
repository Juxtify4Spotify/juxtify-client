interface CategoryProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

export default function CategoryFilter({ title, active, onClick }: CategoryProps) {
  return (
    <button
      onClick={onClick}
      className={`${active ? 'bg-secondary-foreground font-medium text-primary hover:bg-black dark:bg-foreground hover:dark:bg-neutral-100' : 'bg-secondary hover:bg-[#DADADA] dark:bg-[#202020]/50 dark:hover:bg-[#202020]/75'} rounded-lg px-4 py-2 text-sm tracking-wider outline-primary-foreground transition-all`}
    >
      {title}
    </button>
  );
}
