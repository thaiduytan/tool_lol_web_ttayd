import { Box, Flex, Grid, GridCol, Image, Text, rem } from '@mantine/core';
import React from 'react';
import { MainServiceItem } from '../Service/app.service';

// Interface cho props của component con
interface ComparisionProps {
  data: MainServiceItem;
}

const Comparision: React.FC<ComparisionProps> = ({ data }) => {
  return (
    <>
      <Box w={rem('557px')} pt={rem('74px')} px={rem('45px')} pb={rem('56px')}>
        <Flex display={'flex'} direction="column" gap={0} align="center">
          <Text>Other Scripts</Text>
          <Text>Free or Warez Applications</Text>
        </Flex>
        <Box>
          {data &&
            data?.listService.map((item) => {
              return (
                <Grid key={`abc-${item.id}`}>
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
