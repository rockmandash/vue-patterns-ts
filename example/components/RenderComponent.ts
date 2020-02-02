import Vue from 'vue';
import { VNode } from 'vue/types/umd';

export default Vue.extend({
  props: {
    componentFunction: Function
  },
  render(h): VNode {
    return h(this.componentFunction);
  }
});
