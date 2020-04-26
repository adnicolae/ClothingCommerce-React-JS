import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      <div className="title">Collections</div>
      {
        collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview key={ id } { ...collectionProps } />
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);
