import React from 'react';
import './app.hero.scss';
import { Button, Container, Grid, GridCol, Group, Image, rem } from '@mantine/core';
import ButtonCustom from '../Button/app.button';
const Hero = () => {
  return (
    <main>
      <section className="hero-wrapper">
        <Container size={1140} style={{ margin: '0 auto' }}>
          {/* Nội dung trong container */}
          <Grid gutter={20} className="hero" justify="space-between">
            {/* Các cột của hệ thống grid */}
            <GridCol
              span={6.5}
              style={{
                paddingTop: rem('100px'),
              }}
            >
              <div
                className="hero-heading"
                style={{
                  paddingBottom: rem('25px'),
                }}
              >
                <Image
                  fit="contain"
                  w={rem('596.36px')}
                  h={rem('134.08px')}
                  src="/asset/img/LoL Tool For League of Legends.png"
                />
              </div>
              <div
                className="hero-desc"
                style={{
                  paddingBottom: rem('50px'),
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cupiditate consequatur
                nulla vel modi autem molestiae? Dolores unde esse ab fugit minus quod
              </div>
              <Group className="hero-btn" gap={28}>
                <ButtonCustom width={rem('300px')} height={rem('72px')}>
                  Getting Started
                </ButtonCustom>
                <ButtonCustom
                  width={rem('187px')}
                  height={rem('72px')}
                  background="transparent"
                  color="#3B3089"
                  border="2px solid #3b3089"
                >
                  Demo
                </ButtonCustom>
              </Group>
            </GridCol>
            <GridCol span={5.5}>
              <div className="hero-img">
                <Image
                  w={rem('481px')}
                  h={rem('435.06px')}
                  src="/asset/img/Group 35.png"
                  style={{
                    transform: `translateX(${150 - 131}px)`,
                  }}
                />
              </div>
            </GridCol>
          </Grid>
        </Container>
      </section>
    </main>
  );
};

export default Hero;
