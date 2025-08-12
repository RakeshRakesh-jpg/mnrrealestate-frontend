// src/App.jsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FloatingButtons from "./components/FloatingButtons";
import EnquiryForm from "./components/EnquiryForm";
import AddProperty from "./pages/AddProperty";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SlidingOneByOne from './components/SlidingOneByOne';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/add-property" element={<AddProperty />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <SlidingOneByOne />
          <FloatingButtons />
          <EnquiryForm />
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

