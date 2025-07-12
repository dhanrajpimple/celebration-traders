import type { MetaFunction } from "@remix-run/cloudflare";
import About from "~/components/About";
import FAQ from "~/components/FAQ";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import ProductsAndServices from "~/components/ProductAndServices";
import ProductDetails from "~/components/ProductDetails";
import ProductFeatures from "~/components/ProductFeatures";
import ProductShowcase from "~/components/ProductShowcase";
import WhyChooseUs from "~/components/WhyChooseUs";

export const meta: MetaFunction = () => {
  return [
    { title: "AP Fire Works" },
    { name: "description", content: "Welcome to AP Fire Works" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <ProductShowcase/>
      <ProductDetails/>
      <WhyChooseUs/>
      <FAQ/>
      <Footer />
    </div>
  );
}

