import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import ProgramCard from "@/components/ProgramCard";
import CandidateCard from "@/components/CandidateCard";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ABOUT, PROGRAMS, CANDIDATES, CONTACT, SITE } from "@/lib/constants";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <HeroSection />

        {/* O NÁS */}
        <SectionWrapper id="o-nas">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {ABOUT.title}
            </h2>
            <div className="space-y-4">
              {ABOUT.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-700 text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* PROGRAM */}
        <SectionWrapper id="program" dark>
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">
              Náš program
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
              Co chceme změnit
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Čtyři pilíře, na kterých stavíme naši vizi pro Jablonec.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {PROGRAMS.map((program, i) => (
              <ProgramCard key={i} program={program} index={i} />
            ))}
          </div>
        </SectionWrapper>

        {/* KANDIDÁTI */}
        <SectionWrapper id="kandidati">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">
              Náš tým
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
              Kdo za tím stojí
            </h2>
            <p className="text-gray-600 mt-3">
              Poznejte lidi, kteří chtějí změnit Jablonec k lepšímu.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {CANDIDATES.map((candidate, i) => (
              <CandidateCard
                key={i}
                name={candidate.name}
                role={candidate.role}
                img={candidate.img}
                index={i}
              />
            ))}
          </div>
        </SectionWrapper>

        {/* KONTAKT / PODPOŘ NÁS */}
        <SectionWrapper id="kontakt" dark>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {CONTACT.title}
            </h2>
            <p className="text-gray-700 text-lg mb-8">{CONTACT.text}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                <Mail size={20} />
                {SITE.email}
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-gray-600">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" width={18} height={18} fill="#1B3A5C" className="text-primary">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                {SITE.facebook}
              </span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" width={18} height={18} fill="#F07D2B" className="text-accent">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
                {SITE.instagram}
              </span>
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}