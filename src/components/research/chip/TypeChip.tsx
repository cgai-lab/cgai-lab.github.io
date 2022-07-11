import { Chip, useTheme } from '@mui/material';
import React from 'react';
import { generateColor } from '@utils/color';

type IProps = {
  item: string;
};

const TypeBadge = ({ item }: IProps) => {
  const theme = useTheme();
  return (
    <Chip
      label={item}
      sx={{
        bgcolor: generateColor(item),
        mixBlendMode: 'difference',
        marginY: 1,
        cursor: 'pointer',
        fontWeight: theme.typography.fontWeightBold,
        // ...generateColor(item),
      }}
    />
  );
};

export default TypeBadge;
