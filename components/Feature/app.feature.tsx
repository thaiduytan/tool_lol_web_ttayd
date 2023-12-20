import React from 'react';
import './app.feature.scss';
import {
  BackgroundImage,
  Box,
  Card,
  CardSection,
  Center,
  Container,
  Flex,
  Grid,
  GridCol,
  Image,
  Text,
  Title,
  rem,
} from '@mantine/core';

const Feature = () => {
  const featureItems = [
    {
      id: 1,
      img_bg: '/asset/img/icon_bg.png',
      img: '/asset/img/icon_drawing.png',
      title: 'Drawing 4K',
      desc: 'Lorem ipsum dolor sit amet consectetur. Massa sed pharetra lectus neque vel leo mauris neque. Vitae purus cras urna sit odio dolor amet molestie habitant. Lorem ipsum dolor sit amet consectetur. Massa sed pharetra lectus neque vel leo mauris neque. Vitae purus cras urna sit odio dolor amet molestie habitant.',
    },
    {
      id: 2,
      img_bg: '/asset/img/icon_bg.png',
      img: '/asset/img/icon_combo.png',
      title: 'Combo+',
      desc: 'Lorem ipsum dolor sit amet consectetur. Massa sed pharetra lectus neque vel leo mauris neque. Vitae purus cras urna sit odio dolor amet molestie habitant. Lorem ipsum dolor sit amet consectetur. Massa sed pharetra lectus neque vel leo mauris neque. Vitae purus cras urna sit odio dolor amet molestie habitant.',
    },
    {
      id: 3,
      img_bg: '/asset/img/icon_bg.png',
      img: '/asset/img/icon_orbWalker.png',
      title: 'OrbWalker+',
      desc: 'Lorem ipsum dolor sit amet consectetur. Massa sed pharetra lectus neque vel leo mauris neque. Vitae purus cras urna sit odio dolor amet molestie habitant. Lorem ipsum dolor sit amet consectetur. Massa sed pharetra lectus neque vel leo mauris neque. Vitae purus cras urna sit odio dolor amet molestie habitant.',
    },
    {
      id: 4,
      img_bg: '/asset/img/icon_bg.png',
      img: '/asset/img/icon_name_1.png',
      title: 'Name',
      desc: 'Lorem ipsum dolor sit amet consectetur. Massa sed pharetra lectus neque vel leo mauris neque. Vitae purus cras urna sit odio dolor amet molestie habitant. Lorem ipsum dolor sit amet consectetur. Massa sed pharetra lectus neque vel leo mauris neque. Vitae purus cras urna sit odio dolor amet molestie habitant.',
    },
    {
      id: 5,
      img_bg: '/asset/img/icon_bg.png',
      img: '/asset/img/icon_name_2.png',
      title: 'OrbWalker+',
      desc: 'Lorem ipsum dolor sit amet consectetur. Massa sed pharetra lectus neque vel leo mauris neque. Vitae purus cras urna sit odio dolor amet molestie habitant. Lorem ipsum dolor sit amet consectetur. Massa sed pharetra lectus neque vel leo mauris neque. Vitae purus cras urna sit odio dolor amet molestie habitant.',
    },
    {
      id: 6,
      img_bg: '/asset/img/icon_bg.png',
      img: '/asset/img/icon_name_3.png',
      title: 'OrbWalker+',
      desc: 'Lorem ipsum dolor sit amet consectetur. Massa sed pharetra lectus neque vel leo mauris neque. Vitae purus cras urna sit odio dolor amet molestie habitant. Lorem ipsum dolor sit amet consectetur. Massa sed pharetra lectus neque vel leo mauris neque. Vitae purus cras urna sit odio dolor amet molestie habitant.',
    },
  ];
  return (
    <section className="feature-wrapper">
      <Container size={1140} style={{ margin: '0 auto', padding: 0 }}>
        <Flex gap={rem('95px')} className="feature">
          <Box className="feature-left">
            <Image
              w={rem('481px')}
              h={rem('481px')}
              fit="cover"
              src="/asset/img/hacked-webcam-8617096-7121931-2 1.png"
            />
          </Box>
          <Box className="feature-right" mt={rem('116px')}>
            <Flex gap={rem('28px')} direction="column" wrap="nowrap">
              <Text className="feature-right_exclusive">Exclusive features</Text>
              <Title className="feature-right_title">
                Features You’ll Get If You Buy League of Legends Tool
              </Title>
              <Text className="feature-right_desc">
                Lorem ipsum dolor sit amet consectetur. Egestas habitant lorem in turpis aenean nunc
                elit orci sit. Purus tempus sit semper velit aliquet scelerisque sed massaLorem
                ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Egestas
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Flex className="feature-list" gap={rem('68px')} wrap={'wrap'} mt={rem('126px')}>
          {featureItems &&
            featureItems.map((item, index) => (
              <Card key={index} w={rem('331px')} ta={'center'} p={0} m={0}>
                <Box mx="auto">
                  <BackgroundImage src={item.img_bg} radius="sm">
                    <Center p="md">
                      <Image
                        fit="cover"
                        w={rem('43px')}
                        h={rem('41px')}
                        src={item.img}
                        alt="Norway"
                      />
                    </Center>
                  </BackgroundImage>
                </Box>
                <Text
                  c={'#000000'}
                  ff={"'Outfit', sans-serif"}
                  size={rem('30px')}
                  fw={'700'}
                  mt={rem('30px')}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    lineHeight: rem('24px'),
                  }}
                  c={'#000000'}
                  ff={"'Outfit', sans-serif"}
                  size={rem('16px')}
                  fw={'400'}
                  mt={rem('26px')}
                >
                  {item.desc}
                </Text>
              </Card>
            ))}
        </Flex>
      </Container>
    </section>
  );
};

export default Feature;
