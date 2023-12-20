import { Box, Container, Flex, Grid, GridCol, Text, rem } from '@mantine/core';
import React from 'react';
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
  listService: ServiceItem[];
};
const serviceItems: MainServiceItem[] = [
  {
    id: 1,
    title: 'Other Scripts',
    desc: 'Free or Warez Applications',
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
    id: 1,
    title: 'Other Scripts',
    desc: 'Free or Warez Applications',
    listService: [
      {
        id: 2,
        iconLeft: '123',
        titleService: 'Detected by Riot Games (ban after 3 weeks)',
        iconRight: '345',
      },
      {
        id: 3,
        iconLeft: '123',
        titleService: 'Only 1 feature (OrbWalker)',
        iconRight: '345',
      },
      {
        id: 4,
        iconLeft: '123',
        titleService: 'Works on few champions',
        iconRight: '345',
      },
      {
        id: 5,
        iconLeft: '123',
        titleService: 'Payment only with crypto',
        iconRight: '345',
      },
      {
        id: 6,
        iconLeft: '123',
        titleService: 'Slow FPS when using',
        iconRight: '345',
      },
      {
        id: 7,
        iconLeft: '123',
        titleService: 'Limited resolutions (1280x720@60fps only)',
        iconRight: '345',
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
        <Flex>
          {serviceItems && serviceItems.map((item) => <Comparision key={item.id} data={item} />)}
        </Flex>
      </Container>
    </section>
  );
};

export default Service;
