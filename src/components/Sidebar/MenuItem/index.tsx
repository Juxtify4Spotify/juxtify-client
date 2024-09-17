interface Props {
  title: string;
  href: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

export default function MenuItem({ title, href, icon, isActive }: Props) {
  return (
    <a
      href={href}
      className={`flex items-center justify-start gap-2 rounded-lg text-secondary-foreground ${isActive ? 'bg-tertiary' : ''}`}
    >
      <article className='size-10'>{icon}</article>
      {title}
    </a>
  );
}
