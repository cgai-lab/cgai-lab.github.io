import { Chip } from '@mui/material';
import React from 'react';
import { generateColor } from '@utils/color';

type IProps = {
  item: string;
};

const TypeBadge = ({ item }: IProps) => {
  return (
    <Chip
      label={item}
      sx={{
        bgcolor: generateColor(item),
        mixBlendMode: 'difference',
        marginY: 1,
        cursor: 'pointer',
      }}
    />
  );
};

export default TypeBadge;
