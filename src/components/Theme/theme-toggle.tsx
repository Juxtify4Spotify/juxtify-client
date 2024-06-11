import { useTheme } from './theme-provider';

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return <button onClick={() => setTheme('system')}>Toggle</button>;
}
