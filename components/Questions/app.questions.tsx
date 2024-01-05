'use client';
import React from 'react';
import styled from 'styled-components';
import BoxTile from '../BoxTile/app.boxtitle';
import {
  Box,
  Container,
  Flex,
  Grid,
  GridCol,
  Image,
  Text,
  em,
  rem,
  useMantineTheme,
} from '@mantine/core';
import ClampText from '../ClampText/app.clamtext';
import { useMediaQuery } from '@mantine/hooks';

export type QuestionItems = {
  id: number;
  title: string;
  iconDown: string;
  iconTop: string;
};
const Questions = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);
  const isTableb = useMediaQuery(`(max-width: ${em(992)})`);
  const theme = useMantineTheme();
  const questionItems: QuestionItems[] = [
    {
      id: 1,
      title: 'How to script League of Legends?',
      iconDown: 'icon_question_down.png',
      iconTop: '',
    },
    {
      id: 2,
      title: 'Why is this league hack the best?',
      iconDown: 'icon_question_down.png',
      iconTop: '',
    },
    {
      id: 3,
      title: 'Are script league of legends detected?',
      iconDown: 'icon_question_down.png',
      iconTop: '',
    },
    {
      id: 4,
      title: 'Can I see LoL script gameplays?',
      iconDown: 'icon_question_down.png',
      iconTop: '',
    },
  ];
  const StyledBox = styled(Box)`
    width: calc(50% - 11px);
    border-radius: 7px;
    position: relative;
    @media (max-width: 36em) {
      width: 100%;
    }
  `;
  return (
    <section className="questions">
      <Box mt={!isTableb ? theme.other.marginTop.marginTop_230 : theme.other.marginTop.marginTop_125}>
        <Grid className="question-title">
          <GridCol>
            <BoxTile
              top={'Don’t leave a question mark in your mind'}
              title={'Frequently Asked Questions'}
              desc={
                'Lorem ipsum dolor sit amet consectetur. Egestas habitant lorem in turpis aenean nunc elit orci sit. Purus tempus sit semper velit aliquet scelerisque sed massaLorem ipsum dolor sit amet consectetur.'
              }
            />
          </GridCol>
        </Grid>
        <Flex
          className="question-content"
          gap={rem('22px')}
          justify="flex-start"
          align="flex-start"
          direction="row"
          wrap="wrap"
          ff={theme.headings.fontFamily}
          fs={theme.fontSizes.normal}
          mt={rem('80px')}
        >
          {questionItems.length > 0 &&
            questionItems.map((item) => (
              <StyledBox
                key={`question-${item.id}`}
                px={!isTableb ? rem('130px') : rem('16px')}
                py={!isTableb ? rem('30px') : rem('16px')}
                ta={!isTableb ? 'center' : 'start'}
                bg={theme.colors.blue[1]}
              >
                <Text
                  fw={theme.other.fontWeights.fw_300}
                  size={!isTableb ? theme.fontSizes.fs_20 : theme.fontSizes.fs_12}
                  c={theme.colors.black[2]}
                >
                  {/* {item.title} */}
                  <ClampText lines={1} text={item.title} />
                </Text>
                <Image
                  src={'/asset/img/icon_question_down.png'}
                  w={rem('20px')}
                  h={rem('20px')}
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translate(50%,-50%)',
                    cursor: 'pointer',
                  }}
                />
              </StyledBox>
            ))}
        </Flex>
      </Box>
    </section>
  );
};

export default Questions;
