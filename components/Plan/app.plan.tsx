import React from 'react';
import './app.plan.scss';
import { Flex, Grid, GridCol, em, rem } from '@mantine/core';
import CardPlan from '../CardPlan/app.cardPlan';
import BoxTile from '../BoxTile/app.boxtitle';
import { useMediaQuery } from '@mantine/hooks';

export type CardItemsType = {
  id: number;
  img: string;
  title: string;
  priceT: number;
  priceB: number;
  labelSale: string;
  backGroundSale: string;
  backGroundAfterSale: string;
  iconSale: string;
  monthy: boolean;
  saler: boolean;
};

const cardItems: CardItemsType[] = [
  {
    id: 1,
    img: 'plan_img_1day.png',
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
    img: 'plan_img_30days.png',
    title: '30 Day LoL Tool',
    priceT: 65,
    priceB: 45,
    labelSale: 'Best Seller',
    backGroundSale: '#3B3089',
    backGroundAfterSale: '#000000',
    iconSale: 'plan_img_30days_iconsale.png',
    monthy: false,
    saler: true,
  },
  {
    id: 3,
    img: 'plan_img_3month.png',
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
    img: 'plan_img_monthly.png',
    title: 'Monthy LoL Tool',
    priceT: 50,
    priceB: 35,
    labelSale: 'Cancel Anytime',
    backGroundSale: '#4470B2',
    backGroundAfterSale: '#4470B2',
    iconSale: 'plan_img_monthly_iconsale.png',
    monthy: true,
    saler: true,
  },
];

const Plan = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);
  const isTableb = useMediaQuery(`(max-width: ${em(992)})`);
  return (
    <section className="plan-wrapper">
      {/* Nội dung trong container */}
      <Grid gutter={1} className="plan" pt={!isTableb ? rem('165px') : rem('70px')}>
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
          <Flex
            className="plan-list"
            gap={20}
            direction="row"
            wrap="wrap"
            justify={!isTableb ? 'space-between':"center"}
            mt={!isMobile ? rem('84px') : rem('35px')}
          >
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
    </section>
  );
};

export default Plan;
