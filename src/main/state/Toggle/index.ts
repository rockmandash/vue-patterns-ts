import Vue from 'vue';
import { VNode } from 'vue/types/umd';
import { renderScopedSlotWithData } from '../../../baseRender';

const ToggleOptions = {
  props: {
    initialOn: {
      type: Boolean,
      default: false
    }
  }
} as const;

const Toggle = Vue.extend({
  props: ToggleOptions.props,
  data() {
    return {
      on: this.initialOn
    };
  },
  methods: {
    setOn() {
      this.on = true;
    },
    setOff() {
      this.on = false;
    },
    toggle() {
      this.on = !this.on;
    }
  },
  render(h): VNode {
    return renderScopedSlotWithData.call(this, h, {
      on: this.on,
      setOn: this.setOn,
      setOff: this.setOff,
      toggle: this.toggle
    });
  }
});

export { Toggle, ToggleOptions };
