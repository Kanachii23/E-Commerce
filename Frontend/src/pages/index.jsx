import ProductCard from "../components/product-card";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function HomePage() {
  return (
    <main className="w-screen h-screen flex gap-5 flex-col bg-teal-100">
      <section className="flex-1 min-h-0 p-5 flex-wrap flex gap-3">
        <ProductCard />
        <ProductCard />
      </section>
    </main>
  );
}
