import { Chip, useTheme } from '@mui/material';
import React from 'react';
// import { generateColor } from '@utils/color';

type IProps = {
  item: string;
};

const PersonChip = ({ item }: IProps) => {
  const theme = useTheme();
  return (
    <Chip
      label={item}
      sx={{
        bgcolor: '#bee3f8',
        // bgcolor: theme.palette.secondary.main,
        // mixBlendMode: 'difference',
        color: '#2d3748',
        marginRight: 1,
        marginY: 1,
        fontWeight: theme.typography.fontWeightBold,
        cursor: 'pointer',
        // ...generateColor(item),
      }}
    />
  );
};

export default PersonChip;
