import React from 'react';
import './app.intro.scss';
import { Container, Flex, Grid, GridCol, Group, Image, Text, rem } from '@mantine/core';

const Intro = () => {
  return (
    <section className="intro-wrapper">
      <Container size={1140} style={{ margin: '0 auto', padding: 0 }}>
        {/* Nội dung trong container */}
        <Grid gutter={1} className="intro">
          <GridCol
            span={12}
            style={{
              padding: '31px 41px 32px 41px',
            }}
          >
            <Flex
              gap={rem('57px')}
              justify="flex-start"
              align="flex-start"
              direction="row"
              wrap="wrap"
            >
              <Group gap={rem('12px')}>
                <Image src="/asset/img/Vector (Stroke) (1).png" />
                <Text>All Resolusions</Text>
              </Group>
              <Group gap={rem('12px')}>
                <Image src="/asset/img/Group 3.png" />
                <Text>Undetected</Text>
              </Group>
              <Group gap={rem('12px')}>
                <Image src="/asset/img/Group 2.png" />
                <Text>Zero Performance Loss</Text>
              </Group>
              <Group gap={rem('12px')}>
                <Image src="/asset/img/Vector (Stroke) (2).png" />
                <Text>Compitable With All Champions</Text>
              </Group>
            </Flex>
          </GridCol>
        </Grid>
      </Container>
    </section>
  );
};

export default Intro;
