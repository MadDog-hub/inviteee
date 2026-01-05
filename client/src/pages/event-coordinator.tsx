import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EventCoordinatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <section className="pt-32 pb-16 min-h-screen flex flex-col items-center justify-center section-padding">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 rounded-full text-sm">
            <Sparkles className="h-4 w-4 text-orange-600 dark:text-orange-400" />
            <span className="text-orange-800 dark:text-orange-300 font-medium">New Slot Open</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            🎯 Event Coordinator
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Streamline your event coordination with a website built for organization and efficiency.
          </p>
          <div className="bg-gradient-to-br from-orange-50 to-white dark:from-gray-800 dark:to-gray-900 p-12 rounded-2xl border-2 border-dashed border-orange-200 dark:border-orange-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Be Our First Coordinator Client!</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We're launching our coordinator-specific features and want you to be the first to use them.
              Partner with us now for a bespoke coordination dashboard.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full">
              Join as Partner <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
