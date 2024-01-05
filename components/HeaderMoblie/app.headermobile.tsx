import { Burger, Flex, Group, Menu, rem, useMantineTheme } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import React, { FC } from 'react';
import { IMenuItems } from '../Header/app.header';
import Link from 'next/link';
import ButtonCustom from '../Button/app.button';

type HeaderMobileType = {
  opened: boolean;
  toggle: () => void;
  menuItems: IMenuItems[];
};

const HeaderMobile: FC<HeaderMobileType> = ({ opened, toggle, menuItems }) => {
  const theme = useMantineTheme();
  return (
    <>
      <Menu width={'100%'} zIndex={999}>
        <Menu.Target>
          <Burger
            color={theme.colors.violet[1]}
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        </Menu.Target>

        <Menu.Dropdown py={rem('20px')}>
          {menuItems &&
            menuItems.map((item) => (
              <Menu.Item
                ff={theme.headings.fontFamily}
                fw={theme.other.fontWeights.blod}
                ta={'center'}
                key={`menuitems-${item.id}`}
              >
                <Link
                  style={{
                    textDecoration: 'none',
                    color: theme.colors.violet[1],
                    fontSize: theme.fontSizes.fs_14,
                  }}
                  href={item.link}
                >
                  {item.label}
                </Link>
              </Menu.Item>
            ))}
          <Menu.Divider />
          <Flex direction={'column'} align={'center'} gap={'sm'} py={rem('5px')}>
            <ButtonCustom
              height={'auto'}
              width={'auto'}
              fontSize={rem('14px')}
              color={theme.colors.white[0]}
              background={`linear-gradient(to right, ${theme.colors.blue[2]} 0%, ${theme.colors.blue[3]} 100%)`}
            >
              Join Now
            </ButtonCustom>

            <ButtonCustom
              height={'auto'}
              width={'auto'}
              color={theme.colors.violet[1]}
              background="transparent"
              fontSize={rem('14px')}
              border={`2px solid ${theme.colors.violet[1]}`}
            >
              Sign In
            </ButtonCustom>
          </Flex>
          <Menu.Divider />
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default HeaderMobile;
