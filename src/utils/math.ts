import { ImageSource } from '../reducers/gallery/model';

const sumPriceInSource = (source: ImageSource[] | number): string => {
  if (typeof source === 'number') {
    return (Math.round(source * 100) / 100).toFixed(2);
  }
  let num = 0;
  for (const a of source) {
    const price = a.price ? a.price : 0;
    num += price;
  }
  return (Math.round(num * 100) / 100).toFixed(2);
};

export { sumPriceInSource };
