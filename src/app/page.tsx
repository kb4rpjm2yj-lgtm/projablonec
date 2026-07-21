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
      <main className="overflow-x-hidden">
        {/* HERO */}
        <HeroSection />

        {/* O NÁS */}
        <SectionWrapper id="o-nas" className="relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[11px] font-extrabold text-accent uppercase tracking-widest block font-display mb-2">
              Kdo jsme
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 font-display">
              {ABOUT.title}
            </h2>
            <div className="space-y-5">
              {ABOUT.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-slate-700 text-lg leading-relaxed font-normal"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* PROGRAM - se šikmým přechodem směrem dolů */}
        <SectionWrapper id="program" dark slope="down" className="relative z-10 pb-36">
          <div className="text-center mb-16 pt-8">
            <span className="text-[11px] font-extrabold text-accent uppercase tracking-widest block font-display">
              Vize a program
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mt-2 font-display">
              Čtyři hlavní pilíře
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-base">
              Náš program stavíme na konkrétních, realistických řešeních, která ulehčí život každé jablonecké rodině.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {PROGRAMS.map((program, i) => (
              <ProgramCard key={i} program={program} index={i} />
            ))}
          </div>
        </SectionWrapper>

        {/* KANDIDÁTI - se šikmým přechodem nahoru */}
        <SectionWrapper id="kandidati" slope="up" className="relative z-20 pt-32">
          <div className="text-center mb-16">
            <span className="text-[11px] font-extrabold text-accent uppercase tracking-widest block font-display">
              Lidé z Jablonce
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mt-2 font-display">
              Kandidáti do zastupitelstva
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-base">
              Jsme vaši sousedé. Víme, kde Jablonec pálí pata, a máme odvahu i zkušenosti s tím něco udělat.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
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

        {/* KONTAKT / PODPOŘ NÁS - se šikmým přechodem dolů */}
        <SectionWrapper id="kontakt" dark slope="down" className="relative z-10 pb-36 pt-32">
          <div className="max-w-3xl mx-auto text-center pt-8">
            <span className="text-[11px] font-extrabold text-accent uppercase tracking-widest block font-display mb-2">
              Spojme se
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 font-display">
              {CONTACT.title}
            </h2>
            <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto">{CONTACT.text}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white font-bold py-4 px-10 rounded-full text-sm uppercase tracking-widest shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-105"
              >
                <Mail size={18} />
                Napište nám e-mail
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-slate-700 font-semibold font-display text-sm">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" width={18} height={18} fill="#1B3A5C">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Facebook: {SITE.facebook}
              </span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" width={18} height={18} fill="#F07D2B">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
                Instagram: {SITE.instagram}
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
