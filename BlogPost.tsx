import { useParams, Link } from 'wouter';
import { blogPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Artykuł nie znaleziony</h1>
          <p className="text-muted-foreground mb-6">Przepraszamy, artykuł, który szukasz, nie istnieje.</p>
          <Link href="/">
            <a>
              <Button>Wróć do bloga</Button>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container py-6">
          <Link href="/">
            <a className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              <span>Wróć do bloga</span>
            </a>
          </Link>
        </div>
      </header>

      <main className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-primary" />
                <span className="font-semibold text-primary">{post.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('pl-PL')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min czytania</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-foreground mb-6">
              {post.title}
            </h1>

            <div className="prose prose-lg max-w-none text-foreground">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('-')) {
                  const items = paragraph.split('\n').filter(line => line.startsWith('-'));
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-foreground">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-foreground">
                          {item.replace(/^-\s*/, '').replace(/\*\*(.*?)\*\*/g, '$1')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-foreground mb-4 leading-relaxed">
                    {paragraph.replace(/\*\*(.*?)\*\*/g, (match, text) => text)}
                  </p>
                );
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <span className="text-foreground font-semibold">Udostępnij:</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                </a>
              </div>
            </div>

            <Card className="mt-12 p-8 bg-secondary">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Interesują Cię produkty omawiane w tym artykule?
              </h3>
              <p className="text-muted-foreground mb-6">
                Wszystkie produkty z naszych artykułów dostępne są w naszym sklepie internetowym. Odwiedź sklep.starfix.eu i zapoznaj się z pełną ofertą.
              </p>
              <a href="https://sklep.starfix.eu" target="_blank" rel="noopener noreferrer">
                <Button className="w-full md:w-auto">
                  Przejdź do sklepu
                </Button>
              </a>
            </Card>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Powiązane artykuły</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.id} href={`/post/${relatedPost.slug}`}>
                        <a className="group">
                          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-2">
                              {relatedPost.readTime} min czytania
                            </p>
                          </Card>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <Card className="p-6 bg-secondary">
                <h3 className="font-bold text-foreground mb-2">Bądź na bieżąco</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Subskrybuj nasz newsletter i otrzymuj nowe artykuły prosto do skrzynki odbiorczej.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Twój email"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                  <Button className="w-full text-sm">
                    Subskrybuj
                  </Button>
                </form>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-foreground mb-4">Masz pytania?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Skontaktuj się z nami, jeśli masz pytania dotyczące produktów lub artykułów.
                </p>
                <a href="mailto:biuro@starfix.eu" className="text-primary hover:underline text-sm font-semibold">
                  biuro@starfix.eu
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Tel: +48 77 472 62 65
                </p>
              </Card>
            </div>
          </aside>
        </div>
      </main>

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
                  <Link href="/">
                    <a className="text-primary hover:underline">
                      Blog
                    </a>
                  </Link>
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
