import { createSelector } from 'reselect';

const selectshop = state => state.shop;

export const selectShopCollections = createSelector([selectshop], shop => shop.collections); 

export const selectShopItems = createSelector([selectShopCollections], collection => collection.items);