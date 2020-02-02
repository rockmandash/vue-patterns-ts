import Vue, { PropOptions } from 'vue';
import isBoolean from 'lodash/isBoolean';

import { renderNothing } from '../../../baseRender';
import { updateFunctionName } from '../../../constant';
import { optionalBooleanType } from '../../../utils';
import {
  debounceAndThrottleProps,
  attatchDebounceAndThrottle
} from '../../../debounceAndThrottle';

const WindowEventOptions = {
  listenerName: 'fired',
  props: {
    event: {
      type: String,
      required: true
    } as PropOptions<keyof WindowEventMap>,
    // options
    capture: optionalBooleanType,
    once: optionalBooleanType,
    passive: optionalBooleanType,
    // options
    useCapture: optionalBooleanType,
    ...debounceAndThrottleProps
  }
} as const;

function attatchListener(
  this: any,
  addOrRemove:
    | typeof window.addEventListener
    | typeof window.removeEventListener
) {
  if (isBoolean(this.useCapture)) {
    addOrRemove(this.event, this[updateFunctionName], this.useCapture);
  } else if ([this.capture, this.once, this.passive].some(isBoolean)) {
    addOrRemove(this.event, this[updateFunctionName], {
      ...(this.capture && { capture: this.capture }),
      ...(this.once && { once: this.once }),
      ...(this.passive && { passive: this.passive })
    });
  } else {
    addOrRemove(this.event, this[updateFunctionName]);
  }
}

const WindowEvent = Vue.extend({
  props: WindowEventOptions.props,
  methods: {
    [updateFunctionName](event: any) {
      // this function will be debounced or throttle or not
      if (this.$listeners[WindowEventOptions.listenerName]) {
        this.$emit(WindowEventOptions.listenerName, event);
      }
    }
  },
  render: renderNothing,
  mounted() {
    attatchDebounceAndThrottle.call(this);
    attatchListener.call(this, window.addEventListener);
  },
  beforeDestroy() {
    attatchListener.call(this, window.removeEventListener);
  }
});

export { WindowEvent, WindowEventOptions };
