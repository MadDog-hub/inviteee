import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EventPlacePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <Navigation />
      <section className="flex-1 flex flex-col items-center justify-center py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full text-sm">
            <Sparkles className="h-4 w-4 text-green-600 dark:text-green-400" />
            <span className="text-green-800 dark:text-green-300 font-medium">Limited Slot</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            🏛️ Event Place
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Showcase your venue with a premium website that drives more bookings and inquiries.
          </p>
          <div className="bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 p-12 rounded-2xl border-2 border-dashed border-green-200 dark:border-green-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Be Our First Venue Client!</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We're looking for an amazing event space to showcase our latest venue management features.
              Secure your spot today and receive a premium custom layout.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
