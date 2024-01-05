import { Box, Title, em, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';

interface ClampTextProps {
  ff?: string;
  size?: string;
  lines?: number;
  fw?: number;
  c?: string;
  text: string;
  className?: string;
}

const ClampText: React.FC<ClampTextProps> = ({ ff, size, fw, c, lines, text, className }) => {
  const clampStyle: React.CSSProperties = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: lines,
    fontFamily: ff,
    fontSize: size,
    fontWeight: fw,
    color: c,
  };

  return (
    <Title className={className} style={clampStyle}>
      {text}
    </Title>
  );
};

export default ClampText;
