import SHOP_DATA from '../../cms/shop-data';

export const shopReducer = (state = SHOP_DATA, action) => {
  switch(action.type) {
    default:
      return state;
  };
};

export default shopReducer;