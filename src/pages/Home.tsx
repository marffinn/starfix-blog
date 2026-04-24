import { useState, useMemo } from 'react';
import { Link } from 'wouter';
import { blogPosts } from '@/data/blogPosts';
import settings from '@/content/settings.json';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import { Search, Calendar, Tag, Wrench, Sparkles, ArrowRight } from 'lucide-react';

const categories = ['Wszystkie', ...Array.from(new Set(blogPosts.map(p => p.category))).sort((a, b) => a.localeCompare(b, 'pl'))];

const categoryIcons: Record<string, React.ReactNode> = {
  'Termoizolacja': <Wrench className="w-4 h-4" />,
  'Drewno': <Wrench className="w-4 h-4" />,
  'Wykończenie': <Wrench className="w-4 h-4" />,
  'Mocowania': <Wrench className="w-4 h-4" />,
  'Dachy': <Wrench className="w-4 h-4" />,
  'Narzędzia': <Wrench className="w-4 h-4" />,
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Wszystkie');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'Wszystkie' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <header className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/40 to-background">
        <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(hsl(var(--foreground))_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-24 -right-20 w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-accent/20 blur-3xl" />

        <div className="container relative py-14 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-5 border border-primary/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{settings.hero.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-[1.1] text-foreground">
              {settings.hero.titlePrefix} <span className="text-primary">{settings.hero.titleHighlight}</span>,
              <br className="hidden sm:block" /> {settings.hero.titleSuffix}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              {settings.hero.subtitle}
            </p>

            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={settings.hero.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm transition-all"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10">
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-24 space-y-6">
              <Card className="p-4 sm:p-6 border-2 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50">
                <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-primary" />
                  Kategorie
                </h2>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 flex items-center justify-between group ${selectedCategory === category
                        ? 'bg-primary text-primary-foreground font-semibold shadow-md'
                        : 'text-foreground hover:bg-secondary hover:translate-x-1'
                        }`}
                    >
                      <span>{category}</span>
                      {category !== 'Wszystkie' && (
                        <span className={`text-xs px-2 py-0.5 rounded-full ${selectedCategory === category
                          ? 'bg-white/20'
                          : 'bg-secondary group-hover:bg-primary/10'
                          }`}>
                          {blogPosts.filter(p => p.category === category).length}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </Card>

              <Card className="relative overflow-hidden p-5 sm:p-6 brand-gradient text-primary-foreground border-0 shadow-xl shadow-primary/25">
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
                <div className="relative">
                  <h3 className="font-bold text-lg mb-2">{settings.storeCta.title}</h3>
                  <p className="text-primary-foreground/85 text-sm mb-4">
                    {settings.storeCta.description}
                  </p>
                  <a
                    href={settings.storeCta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-background text-foreground hover:bg-background/90 font-semibold">
                      {settings.storeCta.buttonLabel}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </Card>
            </div>
          </aside>

          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                Znaleziono <span className="font-semibold text-foreground">{filteredPosts.length}</span> artykułów
              </p>
            </div>

            {filteredPosts.length === 0 ? (
              <Card className="p-12 text-center">
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Brak wyników</h3>
                <p className="text-muted-foreground mb-4">
                  Nie znaleziono artykułów spełniających kryteria wyszukiwania.
                </p>
                <Button variant="outline" onClick={() => { setSelectedCategory('Wszystkie'); setSearchQuery(''); }}>
                  Wyczyść filtry
                </Button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {filteredPosts.map((post) => (
                  <Link key={post.id} href={`/post/${post.slug}`}>
                    <a className="group block h-full">
                      <Card className="h-full overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                        <div className="p-5 sm:p-6 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-3">
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                              {categoryIcons[post.category]}
                              {post.category}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {post.readTime} min
                            </span>
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{new Date(post.date).toLocaleDateString('pl-PL', { day: 'numeric', month: 'short' })}</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-border bg-card mt-12">
        <div className="container py-10 sm:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div className="sm:col-span-2 lg:col-span-1">
              <img
                src={`${import.meta.env.BASE_URL}starfix.png`}
                alt="Starfix"
                className="h-8 w-auto mb-4"
                loading="lazy"
                decoding="async"
              />
              <p className="text-muted-foreground text-sm leading-relaxed">
                {settings.footer.tagline}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-foreground mb-4">Szybkie Linki</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={settings.footer.links.shopUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    {settings.footer.links.shopLabel}
                  </a>
                </li>
                <li>
                  <a href={settings.footer.links.siteUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    {settings.footer.links.siteLabel}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${settings.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg text-foreground mb-4">Kontakt</h4>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>{settings.contact.street}</p>
                <p>{settings.contact.city}</p>
                <p className="mt-2">Tel: {settings.contact.phone}</p>
                <p>Email: {settings.contact.email}</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg text-foreground mb-4">Godziny otwarcia</h4>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>{settings.openingHours.weekdays}</p>
                <p>{settings.openingHours.saturday}</p>
                <p className="mt-2 text-primary font-medium">{settings.openingHours.note}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
            <p>{settings.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}