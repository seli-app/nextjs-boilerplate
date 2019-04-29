import { combineReducers } from 'redux';

import ui from './ui';
import reqres from './reqres';

export default combineReducers({
  ui,
  reqres
});
