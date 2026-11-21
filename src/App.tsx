import { HashRouter, Route, Routes } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Approach from "@/pages/Approach";
import Care from "@/pages/Care";
import Practitioner from "@/pages/Practitioner";
import Library from "@/pages/Library";
import Article from "@/pages/Article";
import Enquiry from "@/pages/Enquiry";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <HashRouter>
      <div className="grain flex min-h-screen flex-col bg-bone text-ink">
        <a
          href="#main-content"
          onClick={(e) => {
            /* hash router owns the URL hash — move focus manually instead */
            e.preventDefault();
            const main = document.getElementById("main-content");
            main?.setAttribute("tabindex", "-1");
            main?.focus({ preventScroll: false });
          }}
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-moss focus:px-5 focus:py-2.5 focus:text-[13px] focus:font-semibold focus:text-cream"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex-1 outline-none">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/care" element={<Care />} />
            <Route path="/practitioner" element={<Practitioner />} />
            <Route path="/library" element={<Library />} />
            <Route path="/library/:slug" element={<Article />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
