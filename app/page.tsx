'use client';
import './page.scss';
import { Box, Container, em, rem } from '@mantine/core';
import Hero from '@/components/Hero/app.hero';
import AppHeader from '@/components/Header/app.header';
import Intro from '@/components/Intro/app.intro';
import Plan from '@/components/Plan/app.plan';
import Feature from '@/components/Feature/app.feature';
import Service from '@/components/Service/app.service';
import Questions from '@/components/Questions/app.questions';
import GetTool from '@/components/GetTool/app.gettool';
import CarouselTool from '@/components/Carousel/app.carousel';
import { useMediaQuery } from '@mantine/hooks';

export default function HomePage() {
  // const { height, width } = useViewportSize();
  // const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);
  const isTableb = useMediaQuery(`(max-width: ${em(992)})`);
  // 769
  return (
    <>
      <Box className="wrapper" pb={rem('250px')}>
        <Container
          size={isMobile ? 'xs' : isTableb ? 'md' : 'lg'}
          p={isMobile ? 20 : 0}
          mt={isMobile ? 0 : 60}
          className="home-page"
        >
          <AppHeader />
          {/* f */}
          <Hero />
          {/* f */}
          <Intro />
          {/* f */}
          <Plan />
          {/* f */}
          <Feature />
          {/* f */}
          <Service />
          {/* f */}
          <Questions />
          {/* f */}
          <GetTool />
          {/* f */}
          <CarouselTool />
        </Container>
      </Box>
    </>
  );
}
