// 'use client';
import './app.header.scss';
import React from 'react';
import Link from 'next/link';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import ButtonCustom from '../Button/app.button';
import { IconShoppingCart } from '@tabler/icons-react';
import {
  Flex,
  Grid,
  GridCol,
  Group,
  Image,
  Menu,
  rem,
  Box,
  useMantineTheme,
  em,
  NavLink,
} from '@mantine/core';
import Headermobile from '../HeaderMoblie/app.headermobile';
export interface IMenuItems {
  id: number;
  label: string;
  link: string;
  img?: boolean;
}

const menuItems: IMenuItems[] = [
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
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure();
  const isTableb = useMediaQuery(`(max-width: ${em(992)})`);
  return (
    <header id="header">
      <Menu shadow="md" width={200}></Menu>
      <Grid align="center">
        {/* logo */}
        <GridCol span={{ base: 6, md: 1 }}>
          <Box className="header-logo">
            {!isTableb ? (
              <Image h={27.39} w={79} src="/asset/img/header_logo.png" />
            ) : (
              <Image fit="contain" h={40} w={30} src="/asset/img/header_logo_moblie.png" />
            )}
          </Box>
        </GridCol>
        {/* humbeger - menu mobile */}
        <GridCol hiddenFrom="md" span={{ base: 6 }}>
          <Flex align={'center'} justify={'flex-end'}>
            {/* <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" /> */}
            <Headermobile menuItems={menuItems} opened={opened} toggle={toggle}></Headermobile>
          </Flex>
        </GridCol>
        {/* nav */}
        <GridCol
          visibleFrom="md"
          className="header-nav"
          span={6}
          style={{ paddingLeft: rem('20px') }}
        >
          <Menu>
            <Flex gap={66} direction="row" wrap="wrap" align="center">
              {menuItems.map((item) => (
                <Link
                  style={{
                    textDecoration: 'none',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: rem('16px'),
                    lineHeight: rem('24px'),
                    color: '#3b3089',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  key={item.id}
                  href={item.link}
                  className="header-nav_link"
                >
                  {item.img ? (
                    <Image
                      w={18.4}
                      h={20.59}
                      fit="contain"
                      src="/asset/img/header_icon_support.png"
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
        <GridCol visibleFrom="md" className="header-auth" span={3.5}>
          <Group justify="start">
            <ButtonCustom
              height={rem('48px')}
              width={rem('152px')}
              color={theme.colors.white[0]}
              background={`linear-gradient(to right, ${theme.colors.blue[2]} 0%, ${theme.colors.blue[3]} 100%)`}
            >
              Join Now
            </ButtonCustom>

            <ButtonCustom
              height={rem('48px')}
              width={rem('128px')}
              color={theme.colors.violet[1]}
              background="transparent"
              border={`2px solid ${theme.colors.violet[1]}`}
            >
              Sign In
            </ButtonCustom>
          </Group>
        </GridCol>
        {/* cart */}
        <GridCol visibleFrom="md" span={0.75}>
          <div className="header-cart">
            <IconShoppingCart
              style={{ width: rem('30px'), height: rem('30px') }}
              color={theme.colors.violet[1]}
            />
          </div>
        </GridCol>
      </Grid>
    </header>
  );
};

export default AppHeader;
