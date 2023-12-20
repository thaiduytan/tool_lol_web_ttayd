import React from 'react';
import './app.plan.scss';
import { Container, Flex, Grid, GridCol, Text, Title, rem } from '@mantine/core';
import CardPlan from '../CardPlan/app.cardPlan';
import BoxTile from '../BoxTile/app.comparison';

const Plan = () => {
  const cardItems = [
    {
      id: 1,
      img: 'Rectangle 16.png',
      title: '1 Day LoL Tool',
      priceT: 15,
      priceB: 10,
      labelSale: 'All Regions Supported',
      backGroundSale: '#5D8FDA',
      backGroundAfterSale: '#4470B2',
      iconSale: '',
      monthy: false,
      saler: true,
    },
    {
      id: 2,
      img: 'Rectangle 20.png',
      title: '30 Day LoL Tool',
      priceT: 65,
      priceB: 45,
      labelSale: 'Best Seller',
      backGroundSale: '#3B3089',
      backGroundAfterSale: '#000000',
      iconSale: 'Vector (1).png',
      monthy: false,
      saler: true,
    },
    {
      id: 3,
      img: 'Rectangle 21.png',
      title: '3 Month LoL Tool',
      priceT: 125,
      priceB: 85,
      labelSale: 'All Regions Supported',
      backGroundSale: '#5D8FDA',
      backGroundAfterSale: '#4470B2',
      iconSale: '',
      monthy: false,
      saler: true,
    },
    {
      id: 4,
      img: 'Rectangle 22.png',
      title: 'Monthy LoL Tool',
      priceT: 50,
      priceB: 35,
      labelSale: 'Cancel Anytime',
      backGroundSale: '#4470B2',
      backGroundAfterSale: '#4470B2',
      iconSale: 'Vector (2).png',
      monthy: true,
      saler: true,
    },
  ];
  return (
    <section
      className="plan-wrapper"
      style={{
        paddingTop: rem('165px'),
      }}
    >
      <Container size={1140} style={{ margin: '0 auto', padding: 0 }}>
        {/* Nội dung trong container */}
        <Grid gutter={1} className="plan">
          <GridCol span={12}>
            <BoxTile
              top={'Lol Tool Plans'}
              title={'Select your League of Legends Scripts License'}
              desc={
                'Lorem ipsum dolor sit amet consectetur. Egestas habitant lorem in turpis aenean' +
                'nunc elit orci sit. Purus tempus sit semper velit aliquet scelerisque sed massaLorem' +
                'ipsum dolor sit amet consectetur. Egestas habitant lorem in turpis aenean nunc elit' +
                'orci sit. Purus tempus sit semper velit aliquet scelerisque sed massa..'
              }
            />
            <Flex className="plan-list" gap={20} direction="row" wrap="nowrap" mt={rem('84px')}>
              {cardItems.map((item, id) => (
                <CardPlan
                  key={id}
                  img={item.img}
                  title={item.title}
                  priceT={item.priceT}
                  priceB={item.priceB}
                  saler={item.saler}
                  backGroundSale={item.backGroundSale}
                  labelSale={item.labelSale}
                  iconSale={item.iconSale}
                  backGroundAfterSale={item.backGroundAfterSale}
                  monthy={item.monthy}
                ></CardPlan>
              ))}
            </Flex>
          </GridCol>
        </Grid>
      </Container>
    </section>
  );
};

export default Plan;
