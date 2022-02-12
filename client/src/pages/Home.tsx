import React from 'react'
import { HeroSection } from '../components/hero-section/HeroSection'
import { ContentSection } from '../components/content-section/ContentSection'
import { FooterSection } from '../components/footer-section/FooterSection'

export function Home() {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <FooterSection />
    </>
  )
}
