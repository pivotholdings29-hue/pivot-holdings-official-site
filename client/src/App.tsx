import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Products from "./pages/Products";
import Purchase from "./pages/Purchase";
import News from "./pages/News";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import Shipping from "./pages/Shipping";
import Thanks from "./pages/Thanks";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/business" component={Business} />
      <Route path="/products" component={Products} />
      <Route path="/purchase" component={Purchase} />
      <Route path="/news" component={News} />
      <Route path="/company" component={Company} />
      <Route path="/contact" component={Contact} />
      <Route path="/legal" component={Legal} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/shipping" component={Shipping} />
      <Route path="/thanks" component={Thanks} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
