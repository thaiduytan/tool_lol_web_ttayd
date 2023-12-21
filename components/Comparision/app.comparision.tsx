import { Box, Flex, Grid, GridCol, Image, Text, rem } from '@mantine/core';
import React from 'react';
import { MainServiceItem } from '../Service/app.service';
import './app.comparision.scss';
// Interface cho props của component con
interface ComparisionProps {
  data: MainServiceItem;
}

const Comparision: React.FC<ComparisionProps> = ({ data }) => {
  const blurValue = '100px';
  return (
    <>
      <Box
        w={rem('557px')}
        pt={rem('74px')}
        px={rem('43px')}
        pb={rem('56px')}
        className="comparision"
        bg={data.bg}
        style={{
          borderRadius: '10px',
          border: `${data.id === 2 ? '2px solid #5D8FDA' : ''}`,
          boxShadow: `${data.id === 2 ? '0px 0px 4px rgba(110, 195, 253, 0.30)' : ''}`,
        }}
      >
        <Flex display={'flex'} direction="column" gap={10} align="center">
          <Text className="comparision-title">{data.title}</Text>
          <Text className="comparision-desc">{data.desc}</Text>
        </Flex>
        <Box
          className="comparision-service"
          bg={data.bgListService}
          style={{
            borderRadius: `${data.id === 2 ? rem('389px') : ''}`,
            // filter: `${data.id === 2 ? `blur(${blurValue})` : ''}`,
          }}
        >
          {data &&
            data?.listService.map((item) => {
              return (
                <Grid key={`abc-${item.id}`} className="list-service" align="center">
                  <GridCol span={1} className="list-service_icon-left">
                    <Image src={`/asset/img/${item.iconLeft}`}></Image>
                  </GridCol>
                  <GridCol span={10} className="list-service_title">
                    {item.titleService}
                  </GridCol>
                  <GridCol span={1} className="list_service_icon-right">
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
