import MENU_DATA from '../../cms/menu-items';

export const directoryReducer = (state = MENU_DATA, action) => {
  switch(action.type) {
    default:
      return state;
  };
};

export default directoryReducer;