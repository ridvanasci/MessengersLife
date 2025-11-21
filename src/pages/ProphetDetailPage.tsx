import { useRoute, useLocation } from "wouter";
import Header from "@/components/Header";
import ProphetDetail from "@/components/ProphetDetail";
import Footer from "@/components/Footer";
import { prophetsData } from "@shared/prophets-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ProphetDetailPage() {
  const [, params] = useRoute("/prophet/:id");
  const [, setLocation] = useLocation();
  const prophetId = params?.id ? parseInt(params.id) : null;
  const prophet = prophetsData.find((p) => p.id === prophetId);

  if (!prophet) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-3xl font-bold mb-4">Prophet Not Found</h1>
            <Button onClick={() => setLocation("/")} data-testid="button-back-home">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="mb-6"
            data-testid="button-back"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Prophets
          </Button>

          <ProphetDetail prophet={prophet} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
