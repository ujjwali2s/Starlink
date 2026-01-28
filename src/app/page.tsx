'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import Partners from '@/components/Partners';
import Services from '@/components/Services';
import CEO from '@/components/CEO';
import Contact from '@/components/Contact';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import WorkGallery from '@/components/WorkGallery';
import OurBusiness from '@/components/OurBusiness';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-orange-200 selection:text-orange-900">
      <Hero />
      <Highlights />
      <WorkGallery />
      <Stats />
      <Services />
      <CEO />
      <OurBusiness />
      <Partners />

    </main>
  );
}
