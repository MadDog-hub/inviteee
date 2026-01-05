import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EventPlannerPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <Navigation />
      <section className="flex-1 flex flex-col items-center justify-center py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-full text-sm">
            <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-800 dark:text-purple-300 font-medium">New Opportunity</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            📋 Event Planner
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Build your professional event planning portfolio with a stunning, high-converting website.
          </p>
          <div className="bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 p-12 rounded-2xl border-2 border-dashed border-purple-200 dark:border-purple-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Be Our First Client!</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We're currently looking for professional event planners to feature as our flagship partners. 
              Get a special introductory rate and a custom-designed website.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full">
              Claim This Spot <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
