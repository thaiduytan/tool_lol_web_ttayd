'use client'
import './page.scss';
import { Container } from '@mantine/core';
import Hero from '@/components/Hero/app.hero';
import AppHeader from '@/components/Header/app.header';
import Intro from '@/components/Intro/app.intro';
import Plan from '@/components/Plan/app.plan';
import Feature from '@/components/Feature/app.feature';
import Service from '@/components/Service/app.service';

export default function HomePage() {
  return (
    <>
      <div
        className="wrapper"
        style={{
          maxWidth: '1440px',
          margin: '0px auto',
        }}
      >
        <Container
          size={1140}
          style={{ maxWidth: 1140, marginTop: 60, padding: 0 }}
          className="home-page"
        >
          <AppHeader />
          <Hero />
          <Intro />
          <Plan />
          <Feature />
          <Service />
        </Container>
      </div>
    </>
  );
}
