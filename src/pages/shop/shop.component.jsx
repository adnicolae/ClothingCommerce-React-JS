import React, { Component } from 'react'
import SHOP_DATA from '../../cms/shop-data';
import CollectionPreview from '../../components/collection-preview/collection-preview';

class ShopPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state;

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
}

export default ShopPage
