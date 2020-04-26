import React from 'react'
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => {
  console.log(sections)
  return (
    <div className="directory-menu">
      {
        sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={ id } {...sectionProps} />
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
