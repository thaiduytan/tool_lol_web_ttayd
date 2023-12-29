'use client';
import { Box } from '@mantine/core';
import React from 'react';

interface ClampTextProps {
  lines: number;
  text: string;
  className?: string;
}

const ClampText: React.FC<ClampTextProps> = ({ lines, text, className }) => {
  const clampStyle: React.CSSProperties = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: lines,
  };

  return (
    <Box className={className} style={clampStyle}>
      {text}
    </Box>
  );
};

export default ClampText;
