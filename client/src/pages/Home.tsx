import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/hero-section/HeroSection';
import { ContentSection } from '../components/content-section/ContentSection';
import { FooterSection } from '../components/footer-section/FooterSection';
import { TokenContext, TokenType } from '../store/token.conetxt';

export function Home(): React.ReactElement {

  const navigate = useNavigate();
  const context = useContext(TokenContext)

  const [token, setToken] = useState<TokenType | {token: string | null}>({token: null})

  useEffect(() => setToken(context), [context])
  useEffect(() => {
    if (token.token!) navigate('/messages')
  }, [context, token.token, navigate])


  return (
    <>
      <HeroSection />
      <ContentSection />
      <FooterSection />
    </>
  )
};
