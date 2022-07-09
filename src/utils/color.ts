export const generateColor = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  // const tmp =
  //   parseInt(colour.slice(1, 3), 16) +
  //   parseInt(colour.slice(3, 5), 16) +
  //   parseInt(colour.slice(5, 7), 16);
  // return { bgcolor: colour, color: tmp > 382 ? '#000000' : '#ffffff' };
  return colour;
};
