import { useParams, Link } from 'wouter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { blogPosts } from '@/data/blogPosts';
import settings from '@/content/settings.json';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Home as HomeIcon, ArrowRight } from 'lucide-react';

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
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
      <Navbar />

      <main className="container py-6 sm:py-10">
        <Link href="/">
          <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 sm:mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Wróć do bloga</span>
          </a>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <article className="lg:col-span-2 order-2 lg:order-1">
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

            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-8 mb-4">{children}</h2>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mt-6 mb-3">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-2 mb-6 text-muted-foreground">{children}</ol>
                  ),
                  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target={href?.startsWith('http') ? '_blank' : undefined}
                      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-primary hover:underline"
                    >
                      {children}
                    </a>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary/40 pl-4 italic text-muted-foreground my-4">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-secondary text-foreground px-1.5 py-0.5 rounded text-sm">{children}</code>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

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

            <Card className="relative overflow-hidden mt-8 p-6 sm:p-8 brand-gradient text-primary-foreground border-0 shadow-xl shadow-primary/25">
              <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  Interesują Cię produkty omawiane w tym artykule?
                </h3>
                <p className="text-primary-foreground/85 mb-6 leading-relaxed">
                  Wszystkie produkty z naszych artykułów dostępne są w naszym sklepie internetowym.
                  Odwiedź sklep.starfix.eu i zapoznaj się z pełną ofertą.
                </p>
                <a href={settings.storeCta.url} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90 font-semibold">
                    {settings.storeCta.buttonLabel}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </Card>
          </article>

          <aside className="lg:col-span-1 order-1 lg:order-2">
            <div className="sticky top-24 space-y-6">
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

              <Card className="p-4 sm:p-6 border-2 shadow-lg">
                <h3 className="font-bold text-foreground mb-4">Masz pytania?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Skontaktuj się z nami, jeśli masz pytania dotyczące produktów lub artykułów.
                </p>
                <a href={`mailto:${settings.contact.email}`} className="text-primary hover:underline text-sm font-semibold block">
                  {settings.contact.email}
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Tel: {settings.contact.phone}
                </p>
              </Card>
            </div>
          </aside>
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