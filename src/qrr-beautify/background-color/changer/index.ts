import { setStyle } from '@/helpers/utils';
import { key } from '../config';

export default {
  value() {
    setStyle(this.bgEl, {
      [key]: this[key],
    });

    this.changeList[key].changed = false;
  },
};
