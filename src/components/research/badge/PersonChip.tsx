import { Chip } from '@mui/material';
import React from 'react';
import { generateColor } from '@utils/color';

type IProps = {
  item: string;
};

const PersonChip = ({ item }: IProps) => {
  return (
    <Chip
      label={item}
      sx={{
        bgcolor: generateColor(item),
        mixBlendMode: 'difference',
        marginRight: 1,
      }}
    />
  );
};

export default PersonChip;
