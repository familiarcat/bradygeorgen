"use client";
import React from "react";
import Link from 'next/link';
import { ParallaxContainer, ParallaxLayer } from "@/components/parallax/ParallaxContainer";
import { BentoGrid, BentoItem } from "@/components/bento/BentoGrid";
import { motion } from "framer-motion";
import Header from "@/components/Sections/Header";
import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Sections/Footer";
import Hero from "@/components/Sections/Hero";
import Resume from "@/components/Sections/Resume";
import Testimonials from "@/components/Sections/Testimonials";
import Portfolio from "@/components/Sections/Portfolio";
import Page from "@/components/Layout/Page";

const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ");
const scaleAnimation = { whileHover: { scale: 1.02, transition: { duration: 0.2, ease: "easeInOut" } } };
const FeatureList: React.FC = () => (
  <div className="flex flex-col gap-3 w-full">
    {[
      { title: "Feature A", color: "bg-purple-500/20" },
      { title: "Feature B", color: "bg-blue-500/20" },
      { title: "Feature C", color: "bg-indigo-500/20" }
    ].map((feature, index) => (
      <motion.div key={index} {...scaleAnimation} className={cn(feature.color, "rounded-lg p-3 backdrop-blur-sm transform-gpu transition-all duration-300 hover:shadow-lg hover:shadow-white/5")}>
        <span className="text-sm font-medium">{feature.title}</span>
      </motion.div>
    ))}
  </div>
);
const ContentSection: React.FC = () => (
  <BentoGrid className="h-full gap-3 md:gap-4">
    <BentoItem colSpan={2} className="bg-blue-600/20 min-h-48">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">Content Block</h3>
        <p className="text-gray-200">Detailed content description goes here.</p>
      </div>
    </BentoItem>
    <BentoItem className="bg-purple-600/20 min-h-48">
      <div className="h-full flex flex-col">
        <span className="text-lg font-medium mb-4">Side Info</span>
        <div className="flex-1 overflow-y-auto pr-2"><FeatureList /></div>
      </div>
    </BentoItem>
          <BentoItem colSpan={3} className="bg-green-500/20 min-h-24">
            <Link 
              href="/update-content" 
              className="block p-4 text-center font-bold text-white hover:bg-green-500/30 transition-colors"
            >
              Edit Content
            </Link>
          </BentoItem>
  </BentoGrid>
);



export default function Home() {
  
  console.log('index startup', process.env)
  return (
    <>
    <ParallaxContainer>
      <ParallaxLayer speed={0.2} className="bg-gradient-to-br from-blue-900 to-purple-900" zIndex={0}>
        <div className="absolute inset-0" />
      </ParallaxLayer>
      <ParallaxLayer speed={0.5} zIndex={1}>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-500/20 rounded-full blur-xl" />
        </div>
      </ParallaxLayer>
        <Page description="Brady Georgen's personal portfolio and resume website">
        <Header />
        
        <BentoItem><Hero /></BentoItem>
        <BentoItem><About /></BentoItem>
        <BentoGrid className="h-full gap-3 md:gap-4">
    <BentoItem colSpan={2} className="bg-blue-600/20 min-h-48">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">Content Block</h3>
        <p className="text-gray-200">Detailed content description goes here.</p>
      </div>
    </BentoItem>
    <BentoItem className="bg-purple-600/20 min-h-48">
      <div className="h-full flex flex-col">
        <span className="text-lg font-medium mb-4">Side Info</span>
        <div className="flex-1 overflow-y-auto pr-2"><FeatureList /></div>
      </div>
    </BentoItem>
          <BentoItem colSpan={3} className="bg-green-500/20 min-h-24">
            <Link 
              href="/update-content" 
              className="block p-4 text-center font-bold text-white hover:bg-green-500/30 transition-colors"
            >
              Edit Content
            </Link>
          </BentoItem>
  </BentoGrid>
       
        <BentoGrid>
        <BentoItem><Hero /></BentoItem>
        
        </BentoGrid>
        <About />
        <Resume />
        <Portfolio /> 
        <Testimonials />
        <Contact />
        <Footer />
        </Page>
      <div className="content-wrapper relative z-[2]">
        <div className="min-h-screen w-full">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <BentoGrid className="gap-3 md:gap-4 lg:gap-6">
    
              <BentoItem colSpan={3} className="bg-white/5 min-h-48 md:min-h-64">
                
                <div className="space-y-3 md:space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold">Nested Bento Grid</h1>
                  <p className="text-lg md:text-xl text-gray-200">Explore our multi-layered, responsive grid system</p>
                </div>
                <BentoItem className="bg-purple-600/20 min-h-48">
                  <div className="h-full flex flex-col">
                    <span className="text-lg font-medium mb-4">Side Info</span>
                    <div className="flex-1 overflow-y-auto pr-2"><FeatureList /></div>
                  </div>
                </BentoItem>
              </BentoItem>
              <BentoItem colSpan={3} className="mt-0">
                <ContentSection />
              </BentoItem>
              <BentoItem colSpan={3} className="bg-white/5 mt-0">
                <BentoGrid className="gap-3 md:gap-4">
                  {["Bottom A", "Bottom B", "Bottom C"].map((title, index) => (
                    <BentoItem key={index} className={cn("min-h-24 md:min-h-32", index === 0 ? "bg-indigo-500/20" : index === 1 ? "bg-purple-500/20" : "bg-blue-500/20")}>
                      <div className="h-full flex items-center justify-center">
                        <span className="text-lg font-medium">{title}</span>
                      </div>
                    </BentoItem>
                  ))}
          <BentoItem colSpan={3} className="bg-green-500/20 min-h-24">
            <Link 
              href="/update-content" 
              className="block p-4 text-center font-bold text-white hover:bg-green-500/30 transition-colors"
            >
              Edit Content
            </Link>
          </BentoItem>
                </BentoGrid>
              </BentoItem>
          <BentoItem colSpan={3} className="bg-green-500/20 min-h-24">
            <Link 
              href="/update-content" 
              className="block p-4 text-center font-bold text-white hover:bg-green-500/30 transition-colors"
            >
              Edit Content
            </Link>
          </BentoItem>
            </BentoGrid>
          </div>
        </div>
      </div>
    </ParallaxContainer>
    </>
  );
}
