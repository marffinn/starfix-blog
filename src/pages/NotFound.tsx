import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Home as HomeIcon, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container py-12">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-destructive" />
          </div>
          <h1 className="text-6xl sm:text-7xl font-bold text-foreground mb-4">404</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Przepraszamy, strona której szukasz nie istnieje lub została przeniesiona.
          </p>
          <Link href="/">
            <a>
              <Button className="gap-2">
                <HomeIcon className="w-4 h-4" />
                Wróć do strony głównej
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}