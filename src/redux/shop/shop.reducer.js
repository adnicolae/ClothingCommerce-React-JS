import SHOP_DATA from '../../cms/shop-data';
import ShopActionTypes from './shop.types';

export const shopReducer = (state = SHOP_DATA, action) => {
  switch(action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  };
};

export default shopReducer;