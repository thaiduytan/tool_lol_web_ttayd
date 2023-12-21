import { Box, Flex, Grid, GridCol, Image, Text, rem } from '@mantine/core';
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
      <Box w={rem('557px')} pt={rem('74px')} px={rem('43px')} pb={rem('56px')} bg={data.bg}>
        <Flex
          display={'flex'}
          direction="column"
          gap={10}
          align="center"
          ff={"'Outfit', sans-serif"}
          fs={'normal'}
          style={{ color: theme.colors.black[0] }}
        >
          <Text>{data.title}</Text>
          <Text>{data.desc}</Text>
        </Flex>
        <Box>
          {data &&
            data?.listService.map((item) => {
              return (
                <Grid key={`abc-${item.id}`} align="center">
                  <GridCol span={1}>
                    <Image src={`/asset/img/${item.iconLeft}`}></Image>
                  </GridCol>
                  <GridCol span={10}>{item.titleService}</GridCol>
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
