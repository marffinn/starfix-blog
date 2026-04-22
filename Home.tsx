import { useState, useMemo } from 'react';
import { Link } from 'wouter';
import { blogPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search, Calendar, Clock, Tag } from 'lucide-react';

const categories = ['Wszystkie', 'Termoizolacja', 'Drewno', 'Wykończenie', 'Mocowania', 'Dachy', 'Narzędzia'];

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
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container py-6">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Starfix Blog
              </h1>
              <p className="text-lg text-muted-foreground">
                Poradniki i artykuły o technice zamocowań, termoizolacji i akcesoriach budowlanych
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Szukaj artykułów..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-xl font-bold text-foreground mb-4">Kategorie</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground font-semibold'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Shop Link */}
              <div className="mt-8 p-4 bg-secondary rounded-lg">
                <h3 className="font-bold text-foreground mb-2">Odwiedź nasz sklep</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Wszystkie produkty omawiane w artykułach dostępne w naszym sklepie
                </p>
                <a
                  href="https://sklep.starfix.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="w-full">
                    Przejdź do sklepu
                  </Button>
                </a>
              </div>
            </div>
          </aside>

          {/* Blog Posts Grid */}
          <div className="lg:col-span-3">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  Nie znaleziono artykułów spełniających kryteria wyszukiwania.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <Link key={post.id} href={`/post/${post.slug}`}>
                    <a className="group">
                      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="p-6 flex flex-col h-full">
                          {/* Category Badge */}
                          <div className="flex items-center gap-2 mb-3">
                            <Tag className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">
                              {post.category}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                            {post.excerpt}
                          </p>

                          {/* Meta Information */}
                          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(post.date).toLocaleDateString('pl-PL')}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime} min czytania</span>
                            </div>
                          </div>

                          {/* Read More Button */}
                          <Button className="mt-4 w-full" variant="outline">
                            Czytaj więcej
                          </Button>
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
      <footer className="border-t border-border bg-card mt-16">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">O Starfix</h4>
              <p className="text-muted-foreground text-sm">
                Technika zamocowań Amex Starfix – profesjonalne produkty dla branży budowlanej od 1990 roku.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Szybkie Linki</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://sklep.starfix.eu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Sklep internetowy
                  </a>
                </li>
                <li>
                  <a href="https://starfix.eu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Strona główna
                  </a>
                </li>
                <li>
                  <a href="mailto:biuro@starfix.eu" className="text-primary hover:underline">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Kontakt</h4>
              <p className="text-muted-foreground text-sm">
                ul. Strzelecka 17<br />
                47-230 Kędzierzyn-Koźle<br />
                Tel: +48 77 472 62 65<br />
                Email: biuro@starfix.eu
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Technika Zamocowań Amex Starfix. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
