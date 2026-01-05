import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ExternalLink, Building2, Star, Users, Calendar, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CorporatePage() {
  const samples = [
    { name: "Tapat 2026", url: "https://tapat2026.site/" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-cyan-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-cyan-100 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-800 rounded-full text-sm">
              <Building2 className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-cyan-800 dark:text-cyan-300 font-medium">Corporate Event Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Elevate Your Corporate Events
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Professional, high-impact event websites for conferences, seminars, and corporate gatherings.
            </p>

            <div className="flex justify-center">
              <Button 
                onClick={() => document.getElementById('samples')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg"
              >
                View Samples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Samples Section */}
      <section id="samples" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Corporate Event Samples
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional event websites we've designed for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {samples.map((sample, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-lg">{sample.name}</span>
                    <Building2 className="h-5 w-5 text-cyan-500" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href={sample.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-4 rounded-lg transition-colors"
                  >
                    <span>View Website</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-300">Corporate Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">5000+</div>
              <div className="text-gray-600 dark:text-gray-300">Attendees Registered</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
