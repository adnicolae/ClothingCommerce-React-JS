import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component';
import MENU_DATA from '../../cms/menu-items';
import './directory.styles.scss';

class Directory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sections: MENU_DATA
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({ id, ...sectionProps }) => (
            <MenuItem key={ id } {...sectionProps} />
          ))
        }
      </div>
    )
  }
}

export default Directory;
