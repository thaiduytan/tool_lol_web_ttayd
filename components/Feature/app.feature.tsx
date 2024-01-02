import React from 'react';
import {
  BackgroundImage,
  Box,
  Card,
  Center,
  Flex,
  Image,
  Text,
  Title,
  em,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export type FeartureItemsType = [
  {
    id: number;
    img_bg: string;
    img: string;
    title: string;
    desc: string;
  },
];
const featureItems: FeartureItemsType[] = [
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

const Feature = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);
  const isTableb = useMediaQuery(`(max-width: ${em(992)})`);
  return (
    <section className="feature-wrapper">
      <Box mt={!isTableb ? rem('300px') : rem('0px')}>
        <Flex gap={rem('95px')} className="feature" wrap={'wrap'}>
          <Box w={!isTableb ? '45%' : '100%'} className="feature-left">
            <Image
              visibleFrom="md"
              w={rem('481px')}
              h={rem('481px')}
              fit="cover"
              src="/asset/img/feature_img_hacked_webcam.png"
            />
          </Box>

          <Box
            w={!isTableb ? '45%' : '100%'}
            className="feature-right"
            mt={!isTableb ? rem('116px') : rem('0px')}
          >
            <Flex
              gap={rem('28px')}
              direction="column"
              wrap="nowrap"
              ff={theme.headings.fontFamily}
              ta={!isTableb ? 'right' : 'center'}
              fw={theme.fontWeights.bold}
            >
              <Text
                className="feature-right_exclusive"
                ff={"'Roboto', sans-serif"}
                size={!isMobile ? theme.fontSizes.fs_20 : theme.fontSizes.fs_14}
                fw={theme.fontWeights.bold}
                lh={!isMobile ? rem('24px') : rem('16px')}
                c={theme.colors.blue[3]}
              >
                Exclusive features
              </Text>
              <Title
                className="feature-right_title"
                size={!isMobile ? theme.fontSizes.fs_50 : theme.fontSizes.fs_24}
                fw={theme.fontWeights.bold}
                lh={!isMobile ? rem('60px') : rem('28px')}
                c={theme.colors.violet[1]}
              >
                Features You’ll Get If You Buy League of Legends Tool
              </Title>
              <Image
                hiddenFrom="md"
                w={rem('220px')}
                h={rem('220px')}
                fit="cover"
                src="/asset/img/feature_img_hacked_webcam.png"
                m={'0px auto'}
              />
              <Text
                className="feature-right_desc"
                size={!isMobile ? theme.fontSizes.fs_20 : theme.fontSizes.fs_14}
                fw={theme.fontWeights.fw_300}
                lh={!isMobile ? rem('24px') : rem('16px')}
                c={theme.colors.violet[1]}
              >
                Lorem ipsum dolor sit amet consectetur. Egestas habitant lorem in turpis aenean nunc
                elit orci sit. Purus tempus sit semper velit aliquet scelerisque sed massaLorem
                ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Egestas
              </Text>
            </Flex>
          </Box>
        </Flex>

        <Flex
          className="feature-list"
          gap={rem('68px')}
          wrap={'wrap'}
          mt={!isMobile ? rem('126px') : rem('60px')}
        >
          {featureItems &&
            featureItems.map((item, index) => (
              <Card key={index} w={!isTableb ? rem('331px') : '100%'} ta={'center'} p={0} m={0}>
                <Box display={!isTableb ? 'block' : 'flex'}>
                  <Box display={'inline-block'}>
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
                  </Box>
                  <Box
                    ff={"'Outfit', sans-serif"}
                    c={theme.colors.black[2]}
                    pl={!isTableb ? '0px' : '20px'}
                  >
                    <Text
                      size={!isMobile ? theme.fontSizes.fs_30 : theme.fontSizes.fs_20}
                      fw={theme.fontWeights.bold}
                      mt={!isTableb ? rem('30px') : '0'}
                      ta={!isTableb ? 'center' : 'start'}
                    >
                      {item.title}
                    </Text>
                    <Text
                      lh={!isMobile ? rem('24px') : rem('14px')}
                      size={!isMobile ? theme.fontSizes.fs_16 : theme.fontSizes.fs_12}
                      fw={theme.fontWeights.normal}
                      mt={!isTableb ? rem('30px') : '5px'}
                      ta={!isTableb ? 'center' : 'start'}
                    >
                      {item.desc}
                    </Text>
                  </Box>
                </Box>
              </Card>
            ))}
        </Flex>
      </Box>
    </section>
  );
};

export default Feature;
