import Vue from 'vue';
import { isClient } from '../../../utils';
import { createRenderScopedSlotsOrRenderlessWithWindowEvent } from '../../../render';
import { updateFunctionName } from '../../../constant';
import { debounceAndThrottleProps } from '../../../debounceAndThrottle';
import { emitThisData } from '../../../snippets';

const WindowSizeOptions = {
  listenerName: 'resize',
  props: {
    initialWidth: {
      type: Number,
      default: Infinity
    },
    initialHeight: {
      type: Number,
      default: Infinity
    },
    ...debounceAndThrottleProps
  }
} as const;

function createInitialData(this: any) {
  return {
    width: (isClient ? window.innerWidth : this.initialWidth) as number,
    height: (isClient ? window.innerHeight : this.initialHeight) as number
  };
}

const WindowSize = Vue.extend({
  props: WindowSizeOptions.props,
  data: createInitialData,
  methods: {
    [updateFunctionName]() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      emitThisData.call(this, WindowSizeOptions.listenerName);
    }
  },
  render: createRenderScopedSlotsOrRenderlessWithWindowEvent(
    WindowSizeOptions.listenerName
  )
});

type WindowSizeEmittedDataType = ReturnType<typeof createInitialData>;

export { WindowSize, WindowSizeOptions, WindowSizeEmittedDataType };
