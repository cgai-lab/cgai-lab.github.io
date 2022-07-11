import { Chip, useTheme } from '@mui/material';
import React from 'react';
import { generateColor } from '@utils/color';

type IProps = {
  item: string;
};

const PersonChip = ({ item }: IProps) => {
  const theme = useTheme();
  return (
    <Chip
      label={item}
      sx={{
        bgcolor: generateColor(item),
        mixBlendMode: 'difference',
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
