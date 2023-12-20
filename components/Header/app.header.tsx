import './app.header.scss';
import React from 'react';
import Link from 'next/link';
import { IconHeadphones, IconShoppingCart } from '@tabler/icons-react';
import { Button, Center, Flex, Grid, GridCol, Group, Image, Menu, rem } from '@mantine/core';
import ButtonCustom from '../Button/app.button';

const menuItems = [
  { id: 1, label: 'How To Use', link: '/about' },
  { id: 2, label: 'Demo', link: '/contact' },
  { id: 3, label: 'Document', link: '/contact' },
  {
    id: 4,
    label: 'Support',
    link: '/contact',
    img: true,
  },
];

const AppHeader = () => {
  return (
    <header id="header">
      <Grid align="center" justify="start" display="flex">
        {/* logo */}
        <GridCol span={1}>
          <div className="header-logo">
            <Image radius="md" h={27.39} w={79} src="/asset/img/logo tcc.png" />
          </div>
        </GridCol>

        {/* nav */}
        <GridCol className="header-nav" span={6} style={{ paddingLeft: rem('20px') }}>
          <Menu>
            <Flex gap={66} direction="row" wrap="wrap" align="center">
              {menuItems.map((item) => (
                <Link key={item.id} href={item.link} className="header-nav_link">
                  {item.img ? (
                    <Image
                      w={18.4}
                      h={20.59}
                      fit="contain"
                      src="/asset/img/VectorStroke.png"
                      style={{ paddingRight: rem('5px') }}
                    ></Image>
                  ) : (
                    ''
                  )}
                  {item.label}
                </Link>
              ))}
            </Flex>
          </Menu>
        </GridCol>

        {/* btn auth */}
        <GridCol className="header-auth" span={3.5}>
          <Group justify="start">
            <ButtonCustom
              height={rem('48px')}
              width={rem('152px')}
              color="#ffffff"
              background="linear-gradient(to right, #5d8fda 0%, #5da7da 100%)"
            >
              Join Now
            </ButtonCustom>

            <ButtonCustom
              height={rem('48px')}
              width={rem('128px')}
              color="#3b3089"
              background="transparent"
              border="2px solid #3b3089"
            >
              Sign In
            </ButtonCustom>
          </Group>
        </GridCol>

        {/* cart */}

        <GridCol span={0.75}>
          <div className="header-cart">
            <IconShoppingCart style={{ width: rem('30px'), height: rem('30px') }} color="#3B3089" />
          </div>
        </GridCol>
      </Grid>
    </header>
  );
};

export default AppHeader;
