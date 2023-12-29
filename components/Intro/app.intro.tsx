import React from 'react';
import { Box, Flex, Group, Image, Text, em, rem, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import ClampText from '../ClampText/app.clamtext';

export type IntroItemsType = {
  id: number;
  icon: string;
  label: string;
};
const introItems: IntroItemsType[] = [
  {
    id: 1,
    icon: 'intro_icon_1.png',
    label: 'All Resolusions',
  },
  {
    id: 2,
    icon: 'intro_icon_2.png',
    label: 'Undetected',
  },
  {
    id: 3,
    icon: 'intro_icon_3.png',
    label: 'Zero Performance Loss',
  },
  {
    id: 4,
    icon: 'intro_icon_4.png',
    label: 'Compitable With All Champions',
  },
];

const Intro = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);
  const isTableb = useMediaQuery(`(max-width: ${em(769)})`);
  return (
    <section className="intro-wrapper">
      <Box
        className="intro"
        style={{
          borderRadius: rem('7px'),
        }}
        px={rem('41px')}
        py={rem('31px')}
        mt={!isTableb ? rem('170px') : rem('30px')}
        bg={theme.colors.blue[4]}
        ff={theme.headings.fontFamily}
        lh={rem('24px')}
      >
        <Flex gap={rem('57px')} wrap="wrap">
          {introItems &&
            introItems.map((item) => (
              <Group
                key={`intro-${item.id}`}
                gap={!isTableb ? rem('12px') : rem('8px')}
                wrap="nowrap"
                w={isMobile ? '100%' : isTableb ? '40%' : 'auto'}
              >
                <Image src={`/asset/img/${item.icon}`} />
                <Text
                  size={!isTableb ? theme.fontSizes.fs_20 : theme.fontSizes.fs_12}
                  fw={theme.fontWeights.normal}
                >
                  <ClampText lines={2} text={item.label}></ClampText>
                </Text>
              </Group>
            ))}
        </Flex>
      </Box>
    </section>
  );
};

export default Intro;
