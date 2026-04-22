import { useParams, Link } from 'wouter';
import { blogPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Home as HomeIcon, ArrowRight } from 'lucide-react';

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="container py-12 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">404</h1>
            <p className="text-lg text-muted-foreground mb-6">Przepraszamy, artykuł, który szukasz, nie istnieje.</p>
            <Link href="/">
              <a>
                <Button>
                  <HomeIcon className="w-4 h-4 mr-2" />
                  Wróć do bloga
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container py-4 sm:py-6">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Wróć do bloga</span>
              <span className="sm:hidden">Wróć</span>
            </a>
          </Link>
        </div>
      </header>

      <main className="container py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Article Content */}
          <article className="lg:col-span-2 order-2 lg:order-1">
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                  <Tag className="w-3.5 h-3.5" />
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} min czytania</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                {post.title}
              </h1>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h2 key={index} className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('-')) {
                  const items = paragraph.split('\n').filter(line => line.startsWith('-'));
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="leading-relaxed">
                          {item.replace(/^-\s*/, '').replace(/\*\*(.*?)\*\*/g, '$1')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                    {paragraph.replace(/\*\*(.*?)\*\*/g, (_match, text) => text)}
                  </p>
                );
              })}
            </div>

            {/* Share Section */}
            <div className="mt-10 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <span className="text-foreground font-medium">Udostępnij:</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? window.location.href : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* CTA Card */}
            <Card className="mt-8 p-6 sm:p-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0 shadow-xl">
              <h3 className="text-xl font-bold mb-3">
                Interesują Cię produkty omawiane w tym artykule?
              </h3>
              <p className="text-blue-100 mb-6">
                Wszystkie produkty z naszych artykułów dostępne są w naszym sklepie internetowym. 
                Odwiedź sklep.starfix.eu i zapoznaj się z pełną ofertą.
              </p>
              <a href="https://sklep.starfix.eu" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                  Przejdź do sklepu
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </Card>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 order-1 lg:order-2">
            <div className="sticky top-24 space-y-6">
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <Card className="p-4 sm:p-6 border-2 shadow-lg">
                  <h3 className="text-lg font-bold text-foreground mb-4">Powiązane artykuły</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.id} href={`/post/${relatedPost.slug}`}>
                        <a className="group block">
                          <Card className="p-4 hover:shadow-md transition-all duration-200 hover:border-primary/20">
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
                </Card>
              )}

              {/* Newsletter */}
              <Card className="p-4 sm:p-6 border-2 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
                <h3 className="font-bold text-foreground mb-2">Bądź na bieżąco</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Subskrybuj nasz newsletter i otrzymuj nowe artykuły prosto do skrzynki odbiorczej.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Twój email"
                    className="w-full px-3 py-2.5 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                  <Button className="w-full text-sm">
                    Subskrybuj
                  </Button>
                </form>
              </Card>

              {/* Contact */}
              <Card className="p-4 sm:p-6 border-2 shadow-lg">
                <h3 className="font-bold text-foreground mb-4">Masz pytania?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Skontaktuj się z nami, jeśli masz pytania dotyczące produktów lub artykułów.
                </p>
                <a href="mailto:biuro@starfix.eu" className="text-primary hover:underline text-sm font-semibold block">
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
                  <Link href="/">
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      Blog
                    </a>
                  </Link>
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