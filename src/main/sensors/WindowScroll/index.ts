import Vue from 'vue';
import { isClient } from '../../../utils';
import { createRenderScopedSlotOrRenderlessWithWindowEvent } from '../../../render';
import { updateFunctionName } from '../../../constant';
import { debounceAndThrottleProps } from '../../../debounceAndThrottle';
import { emitThisData } from '../../../snippets';

const WindowScrollOptions = {
  listenerName: 'scroll',
  props: debounceAndThrottleProps
} as const;

function createInitialData() {
  return {
    x: isClient ? window.pageXOffset : 0,
    y: isClient ? window.pageYOffset : 0
  };
}

const WindowScroll = Vue.extend({
  props: WindowScrollOptions.props,
  data: createInitialData,
  methods: {
    [updateFunctionName]() {
      this.x = window.pageXOffset;
      this.y = window.pageYOffset;
      emitThisData.call(this, WindowScrollOptions.listenerName);
    }
  },
  render: createRenderScopedSlotOrRenderlessWithWindowEvent(
    WindowScrollOptions.listenerName
  )
});

type WindowScrollEmittedDataType = ReturnType<typeof createInitialData>;

export { WindowScroll, WindowScrollOptions, WindowScrollEmittedDataType };
