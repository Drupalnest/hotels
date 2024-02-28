import hotelOverrides from "./hotel-override.json";
const KNIGHT_INN = 'knights inn';

export const priceFormatter = (price, decimals = 2) => {
  if (price && !isNaN(price)) {
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    price = formatter.format(price);
  }
  return price;
};
export const replaceContentOverrides = (hotel) => {
  let data = {...hotel};
  const item = hotelOverrides.find(x => {
    return x.hotelCode === data.crs_code;
  });
  if (!item) {
    return data;
  } else {
    item.overrides.map((o,i) => {
      const name = Object.getOwnPropertyNames(o)[0];
      const value = o[name];
      data = {...data, [name]: value};
    });
    return data;
  }
};

export const reOrderKnightsToLast = (brands) => {
  const knightIndex = brands.findIndex( x => x.name.toLowerCase() === KNIGHT_INN)
  if(knightIndex !== -1) {
    const knight = brands.splice(knightIndex, 1)
    brands.push(knight[0])
  }
  return brands
}