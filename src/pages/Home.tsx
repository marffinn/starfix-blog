import { useState, useMemo } from 'react';
import { Link } from 'wouter';
import { blogPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search, Calendar, Tag, Wrench, Home as HomeIcon, ArrowRight } from 'lucide-react';

const categories = ['Wszystkie', 'Termoizolacja', 'Drewno', 'Wykończenie', 'Mocowania', 'Dachy', 'Narzędzia'];

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
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
        <div className="container relative py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-blue-300 mb-4 text-sm font-medium">
              <HomeIcon className="w-4 h-4" />
              <span>Blog ekspercki</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Starfix Blog
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl">
              Poradniki i artykuły o technice zamocowań, termoizolacji i akcesoriach budowlanych. 
              Sprawdzone rozwiązania od ekspertów z 30-letnim doświadczeniem.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Szukaj artykułów..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/15 transition-all"
              />
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 sm:h-16">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-background"/>
          </svg>
        </div>
      </header>

      <main className="container py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10">
          {/* Sidebar - Categories */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-24 space-y-6">
              {/* Categories Card */}
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
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                        selectedCategory === category
                          ? 'bg-primary text-primary-foreground font-semibold shadow-md'
                          : 'text-foreground hover:bg-secondary hover:translate-x-1'
                      }`}
                    >
                      <span>{category}</span>
                      {category !== 'Wszystkie' && (
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          selectedCategory === category 
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

              {/* Shop CTA Card */}
              <Card className="p-4 sm:p-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0 shadow-xl">
                <h3 className="font-bold text-lg mb-2">Odwiedź nasz sklep</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Wszystkie produkty omawiane w artykułach dostępne w naszym sklepie internetowym
                </p>
                <a
                  href="https://sklep.starfix.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                    Przejdź do sklepu
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </Card>
            </div>
          </aside>

          {/* Blog Posts Grid */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* Results Count */}
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
                <Button variant="outline" onClick={() => {setSelectedCategory('Wszystkie'); setSearchQuery('');}}>
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
                          {/* Category & Date */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                              {categoryIcons[post.category]}
                              {post.category}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {post.readTime} min
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                            {post.excerpt}
                          </p>

                          {/* Meta */}
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

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-12">
        <div className="container py-10 sm:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="font-bold text-lg text-foreground mb-4">O Starfix</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Technika zamocowań Amex Starfix – profesjonalne produkty dla branży budowlanej od 1990 roku.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-foreground mb-4">Szybkie Linki</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://sklep.starfix.eu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    Sklep internetowy
                  </a>
                </li>
                <li>
                  <a href="https://starfix.eu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    Strona główna
                  </a>
                </li>
                <li>
                  <a href="mailto:biuro@starfix.eu" className="text-muted-foreground hover:text-primary transition-colors">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg text-foreground mb-4">Kontakt</h4>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>ul. Strzelecka 17</p>
                <p>47-230 Kędzierzyn-Koźle</p>
                <p className="mt-2">Tel: +48 77 472 62 65</p>
                <p>Email: biuro@starfix.eu</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg text-foreground mb-4">Godziny otwarcia</h4>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>Pon-Pt: 7:00 - 17:00</p>
                <p>Sob: 8:00 - 13:00</p>
                <p className="mt-2 text-primary font-medium">Dostawa 24h</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Technika Zamocowań Amex Starfix. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}