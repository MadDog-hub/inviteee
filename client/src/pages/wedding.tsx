import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function WeddingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="pt-32 pb-16 min-h-screen flex flex-col items-center justify-center section-padding">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
            💍 Wedding
          </h1>
          <p className="text-2xl text-gray-600">Coming Soon</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
