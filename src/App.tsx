import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import ProphetDetailPage from "@/pages/ProphetDetailPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <WouterRouter base="/MessengersLife">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/prophet/:id" component={ProphetDetailPage} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
