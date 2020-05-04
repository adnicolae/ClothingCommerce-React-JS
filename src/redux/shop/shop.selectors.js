import { createSelector } from 'reselect';

const selectshop = state => state.shop;

export const selectShopCollections = createSelector([selectshop], shop => shop.collections); 

export const selectCollectionsForPreview = createSelector([selectShopCollections], collections => collections ? Object.keys(collections).map(key => collections[key]) : []);

export const selectShopItems = createSelector([selectShopCollections], collection => collection.items);

export const selectCollection = collectionUrlParam => 
  createSelector([selectShopCollections], collections => collections ? collections[collectionUrlParam] : null);

export const selectIsCollectionFetching = createSelector([selectshop], shop => shop.isFetching);

export const selectIsCollectionLoaded = createSelector(
  [selectshop],
  shop => !!shop.collections 
)