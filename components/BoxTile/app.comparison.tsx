import React from 'react';
import { Flex, Text, Title, rem } from '@mantine/core';

type BoxTileProps = {
  top: any;
  title: any;
  desc: any;
};

const BoxTile = (props: BoxTileProps) => {
  return (
    <Flex gap={28} direction="column" wrap="wrap" ff={"'Outfit', sans-serif"}>
      <Text
        style={{
          lineHeight: rem('24px'),
        }}
        size={rem('20px')}
        c={'#5da7da'}
        fw={'700'}
        ta="center"
      >
        {props.top}
      </Text>

      <Text
        style={{
          lineHeight: rem('60px'),
        }}
        size={rem('50px')}
        c={'#3b3089'}
        fw={'700'}
        ta="center"
      >
        {props.title}
      </Text>

      <Text
        style={{
          lineHeight: rem('24px'),
        }}
        size={rem('20px')}
        c={'#3b3089'}
        fw={'300'}
        ta="center"
      >
        {props.desc}
      </Text>
    </Flex>
  );
};

export default BoxTile;
