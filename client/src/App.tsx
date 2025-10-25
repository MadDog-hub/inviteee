import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import WeddingPage from "@/pages/wedding";
import DebutPage from "@/pages/debut";
import EventPlannerPage from "@/pages/event-planner";
import EventPlacePage from "@/pages/event-place";
import EventCoordinatorPage from "@/pages/event-coordinator";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/wedding" component={WeddingPage} />
      <Route path="/debut" component={DebutPage} />
      <Route path="/event-planner" component={EventPlannerPage} />
      <Route path="/event-place" component={EventPlacePage} />
      <Route path="/event-coordinator" component={EventCoordinatorPage} />
      <Route component={NotFound} />
    </Switch>
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
