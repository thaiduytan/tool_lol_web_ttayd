import { Box, Container, Flex, Group, Image, Title, em, rem, useMantineTheme } from '@mantine/core';
import React from 'react';
import BoxTile from '../BoxTile/app.boxtitle';
import ButtonCustom from '../Button/app.button';
import { useMediaQuery } from '@mantine/hooks';

const GetTool = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);
  const isTableb = useMediaQuery(`(max-width: ${em(992)})`);
  return (
    <section className="gettool-wrapper">
      <Box mt={!isTableb ? theme.marginTop.marginTop_230 : theme.marginTop.marginTop_125}>
        <Flex
          gap={theme.gap.gap_6}
          justify="flex-start"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
          <Box w={rem('650px')}>
            <BoxTile
              top={'Rise in Summoner Rift'}
              title={'Get iron to Challanger Easily'}
              childen={
                <Box hiddenFrom="md">
                  <Image
                    w={rem('220px')}
                    h={rem('220px')}
                    src={'/asset/img/gettool_img_moblie.png'}
                  />
                </Box>
              }
              desc={
                'Lorem ipsum dolor sit amet consectetur. Egestas habitant lorem in turpis aenean nunc elit orci sit. Purus tempus sit semper velit aliquet scelerisque sed massaLorem ipsum dolor sit.'
              }
              align="center"
            />
            {/* <Box hiddenFrom="md">
              <Image src={'/asset/img/gettool_img_moblie.png'} />
            </Box> */}
            <Group
              gap={!isMobile ? theme.gap.gap_30 : theme.gap.gap_10}
              mt={theme.marginTop.marginTop_40}
            >
              <ButtonCustom
                width={!isMobile ? rem('271px') : '100%'}
                height={!isMobile ? rem('72px') : rem('60px')}
                fontSize=""
              >
                <Image
                  pr={rem('10px')}
                  fit="cover"
                  src="/asset/img/gettool_icon_fee.png"
                  alt="Buy LoL Tools"
                />
                Getting Started
              </ButtonCustom>

              <ButtonCustom
                width={!isMobile ? rem('271px') : '100%'}
                height={!isMobile ? rem('72px') : rem('60px')}
                background="transparent"
                color="#3B3089"
                border="2px solid #3b3089"
              >
                <Image
                  pr={rem('10px')}
                  fit="cover"
                  src="/asset/img/gettool_icon_free.png"
                  alt="Get Free Trial"
                />
                Demo
              </ButtonCustom>
            </Group>
          </Box>
          <Box
            visibleFrom="md"
            style={{
              position: 'relative',
            }}
          >
            <Box
              className="overplay"
              style={{
                background: theme.colors.violet[0],
                borderRadius: theme.borderRadius.borderRadius_circle,
                filter: `${theme.fillter.blur_100}`,
                position: 'absolute',
                zIndex: 1,
                width: rem('400px'),
                height: rem('400px'),
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <Image visibleFrom="md" src={'/asset/img/gettool_img.png'} />
          </Box>
        </Flex>
      </Box>
    </section>
  );
};

export default GetTool;
