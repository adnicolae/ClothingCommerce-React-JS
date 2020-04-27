import { createSelector } from 'reselect';

const selectshop = state => state.shop;

export const selectShopCollections = createSelector([selectshop], shop => shop.collections); 

export const selectCollectionsForPreview = createSelector([selectShopCollections], collections => Object.keys(collections).map(key => collections[key]));

export const selectShopItems = createSelector([selectShopCollections], collection => collection.items);

export const selectCollection = collectionUrlParam => 
  createSelector([selectShopCollections], collections => collections[collectionUrlParam]);