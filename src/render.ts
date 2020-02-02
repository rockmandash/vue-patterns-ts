import { VNode, CreateElement } from 'vue/types/umd';
import { updateFunctionName } from './constant';
import { WindowEvent } from './main/browser/WindowEvent';
import { mapDebounceAndThrottleProps } from './debounceAndThrottle';

function createRenderScopedSlotOrRenderlessWithWindowEvent(
  event: keyof WindowEventMap
) {
  return function(this: any, h: CreateElement): VNode {
    const dataObject = {
      on: {
        fired: this[updateFunctionName]
      },
      props: {
        event,
        ...mapDebounceAndThrottleProps.call(this)
      }
    };

    const normalizedDefaultScopedSlots = this.$scopedSlots.default;

    if (!normalizedDefaultScopedSlots) {
      // renderless
      return h('div', [h(WindowEvent, dataObject)]);
    }

    const slotNodes = normalizedDefaultScopedSlots(this.$data);

    return h('div', [h(WindowEvent, dataObject), slotNodes]);
  };
}

export { createRenderScopedSlotOrRenderlessWithWindowEvent };
