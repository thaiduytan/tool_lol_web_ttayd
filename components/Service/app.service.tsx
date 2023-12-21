import { Box, Container, Flex, Grid, GridCol, Text, rem } from '@mantine/core';
import React from 'react';
import './app.service.scss';
import BoxTile from '../BoxTile/app.comparison';
import Comparision from '../Comparision/app.comparision';
// Type alias cho dữ liệu main service item
export type ServiceItem = {
  id: number;
  iconLeft: string;
  titleService: string;
  iconRight: string;
};

export type MainServiceItem = {
  id: number;
  title: string;
  desc: string;
  bg: string;
  bgListService: string;
  free: boolean;
  listService: ServiceItem[];
};
const serviceItems: MainServiceItem[] = [
  {
    id: 1,
    title: 'Other Scripts',
    desc: 'Free or Warez Applications',
    bg: 'rgba(0, 0, 0, 0.05)',
    bgListService: '',
    free: true,
    listService: [
      {
        id: 2,
        iconLeft: 'detected_icon_free.png',
        titleService: 'Detected by Riot Games (ban after 3 weeks)',
        iconRight: 'group_icon_free.png',
      },
      {
        id: 3,
        iconLeft: 'feature_icon_free.png',
        titleService: 'Only 1 feature (OrbWalker)',
        iconRight: 'group_icon_free.png',
      },
      {
        id: 4,
        iconLeft: 'Works_icon_free.png',
        titleService: 'Works on few champions',
        iconRight: 'group_icon_free.png',
      },
      {
        id: 5,
        iconLeft: 'payment_icon_free.png',
        titleService: 'Payment only with crypto',
        iconRight: 'group_icon_free.png',
      },
      {
        id: 6,
        iconLeft: 'fps_icon_free.png',
        titleService: 'Slow FPS when using',
        iconRight: 'group_icon_free.png',
      },
      {
        id: 7,
        iconLeft: 'resolution_icon_free.png',
        titleService: 'Limited resolutions (1280x720@60fps only)',
        iconRight: 'group_icon_free.png',
      },
    ],
  },
  {
    id: 8,
    title: 'TCC Tool',
    desc: 'License, Safe & Secure',
    bg: '#fff',
    bgListService: 'rgba(110, 195, 253, 0.30)',
    free: false,
    listService: [
      {
        id: 9,
        iconLeft: 'detected_icon_fee.png',
        titleService: 'Undetected (only players can report you)',
        iconRight: 'icon_check_fee.png',
      },
      {
        id: 10,
        iconLeft: 'feature_icon_fee.png',
        titleService: '6 features included (Evade, OrbWalker...)',
        iconRight: 'icon_check_fee.png',
      },
      {
        id: 11,
        iconLeft: 'works_icon_fee.png',
        titleService: 'Works perfectly with ALL champions',
        iconRight: 'icon_check_fee.png',
      },
      {
        id: 12,
        iconLeft: 'payment_icon_fee.png',
        titleService: 'Payment with Paypal, Credit Card..',
        iconRight: 'icon_check_fee.png',
      },
      {
        id: 13,
        iconLeft: 'performance_icon_fee.png',
        titleService: '0 performance loss with all drawings in 4K',
        iconRight: 'icon_check_fee.png',
      },
      {
        id: 14,
        iconLeft: 'all_resolutions_fee.png',
        titleService: 'All resolutions-friendly (144hz, 240hz, ...))',
        iconRight: 'icon_check_fee.png',
      },
    ],
  },
];
const Service = () => {
  return (
    <section
      className="service-wrapper"
      style={{
        paddingTop: rem('275px'),
      }}
    >
      <Container size={1140} style={{ margin: '0 auto', padding: 0 }}>
        {/*phan 1 compare  */}
        <BoxTile
          top={'Quality Comparision'}
          title={'Safer, faster at the best quality'}
          desc={
            'Lorem ipsum dolor sit amet consectetur. Egestas habitant lorem in turpis aenean' +
            'nunc elit orci sit. Purus tempus sit semper velit aliquet scelerisque sed massaLorem' +
            'ipsum dolor sit amet consectetur.'
          }
        />
        {/*phan 2   */}
        <Flex justify={'space-between'} mt={rem('113px')}>
          {serviceItems && serviceItems.map((item) => <Comparision key={item.id} data={item} />)}
        </Flex>
      </Container>
    </section>
  );
};

export default Service;
