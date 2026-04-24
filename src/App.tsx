import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

function AdminRedirect() {
  if (typeof window !== "undefined") {
    window.location.replace(`${import.meta.env.BASE_URL}admin/`);
  }
  return null;
}

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/post/:slug" component={BlogPost} />
      <Route path="/admin" component={AdminRedirect} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}


function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router base={base}>
            <AppRoutes />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;