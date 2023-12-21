import { Box, Flex, Grid, GridCol, Image, Text, Title, rem } from '@mantine/core';
import React from 'react';
import { MainServiceItem } from '../Service/app.service';
import './app.comparision.scss';
import { useMantineTheme } from '@mantine/core';
// Interface cho props của component con
interface ComparisionProps {
  data: MainServiceItem;
}

const Comparision: React.FC<ComparisionProps> = ({ data }) => {
  const theme = useMantineTheme();
  return (
    <>
      <Box
        style={{
          borderRadius: theme.borderRadius.borderRadius_10,
          border: `${data.free !== true ? `2px solid ${theme.borderColor.borderColor_0}` : ''} `,
        }}
        w={rem('557px')}
        pt={rem('74px')}
        px={rem('43px')}
        pb={rem('56px')}
        bg={data.bg}
      >
        <Flex
          display={'flex'}
          direction="column"
          gap={10}
          align="center"
          ff={theme.headings.fontFamily}
          fs={theme.fontSizes.normal}
          style={{ color: theme.colors.black[0] }}
        >
          <Title order={3} fs={theme.fontSizes.title_30} fw={theme.fontWeights.bold}>
            {data.title}
          </Title>
          <Text fs={theme.fontSizes.desc_16} fw={theme.fontWeights.normal}>
            {data.desc}
          </Text>
        </Flex>
        <Box
          style={{
            position: 'relative',
          }}
          mt={theme.marginTop.marginTop_60}
        >
          <Box
            className="overplay"
            style={{
              background: data.free !== true ? theme.colors.blue[0] : '',
              borderRadius: data.free !== true ? theme.borderRadius.borderRadius_389 : '',
              filter: data.free !== true ? `${theme.fillter.blur_100}` : 'none',
              position: 'absolute',
              zIndex: 1,
              width: '100%',
              height: '100%',
            }}
          />
          {data &&
            data?.listService.map((item) => {
              return (
                <Grid
                  key={`abc-${item.id}`}
                  align="center"
                  mt={theme.marginTop.marginTop_35}
                  ff={theme.headings.fontFamily}
                  style={{ color: theme.colors.black[0], zIndex: 2 }}
                >
                  <GridCol span={1}>
                    <Image src={`/asset/img/${item.iconLeft}`}></Image>
                  </GridCol>
                  <GridCol fs={rem('20px')} span={10}>
                    <Text size={theme.fontSizes.text_20}>{item.titleService}</Text>
                  </GridCol>
                  <GridCol span={1}>
                    <Image src={`/asset/img/${item.iconRight}`}></Image>
                  </GridCol>
                </Grid>
              );
            })}
        </Box>
      </Box>
    </>
  );
};

export default Comparision;
