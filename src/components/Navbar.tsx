import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Sun, Moon, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const logoUrl = `${import.meta.env.BASE_URL}starfix.png`;

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: 'Blog', href: '/' },
  { label: 'Sklep', href: 'https://sklep.starfix.eu', external: true },
  { label: 'Strona główna', href: 'https://starfix.eu', external: true },
  { label: 'Kontakt', href: 'mailto:biuro@starfix.eu', external: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-all duration-300',
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-border shadow-sm'
          : 'bg-background/60 backdrop-blur-sm border-transparent'
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/">
          <a className="flex items-center gap-3 group" aria-label="Starfix Blog - strona główna">
            <img
              src={logoUrl}
              alt="Starfix"
              className="h-7 sm:h-8 w-auto transition-transform group-hover:scale-[1.03]"
              loading="eager"
              decoding="async"
            />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground border-l border-border pl-2 sm:pl-3">
              Blog
            </span>
          </a>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = !item.external && location === item.href;
            const common =
              'relative px-3 py-2 text-sm font-medium rounded-md transition-colors inline-flex items-center gap-1.5';
            const stateClass = isActive
              ? 'text-primary bg-primary/10'
              : 'text-foreground/80 hover:text-foreground hover:bg-secondary';
            return item.external ? (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cn(common, stateClass)}
              >
                {item.label}
                {item.href.startsWith('http') && <ExternalLink className="w-3.5 h-3.5 opacity-60" />}
              </a>
            ) : (
              <Link key={item.href} href={item.href}>
                <a className={cn(common, stateClass)}>{item.label}</a>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Przełącz na tryb jasny' : 'Przełącz na tryb ciemny'}
            className="text-foreground/80 hover:text-foreground"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <a
            href="https://sklep.starfix.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button size="sm" className="font-semibold shadow-sm">
              Do sklepu
            </Button>
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          'md:hidden overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur transition-[max-height,opacity] duration-300 ease-out',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="container flex flex-col py-3 gap-1">
          {navItems.map((item) => {
            const isActive = !item.external && location === item.href;
            const base = 'px-3 py-3 rounded-md text-sm font-medium flex items-center justify-between transition-colors';
            const state = isActive ? 'bg-primary/10 text-primary' : 'text-foreground/90 hover:bg-secondary';
            return item.external ? (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cn(base, state)}
              >
                <span>{item.label}</span>
                {item.href.startsWith('http') && <ExternalLink className="w-4 h-4 opacity-60" />}
              </a>
            ) : (
              <Link key={item.href} href={item.href}>
                <a className={cn(base, state)}>{item.label}</a>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
