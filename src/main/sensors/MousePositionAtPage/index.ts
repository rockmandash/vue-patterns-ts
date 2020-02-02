import Vue from 'vue';
import { updateFunctionName } from '../../../constant';
import { createRenderScopedSlotsOrRenderlessWithWindowEvent } from '../../../render';
import { debounceAndThrottleProps } from '../../../debounceAndThrottle';
import { emitThisData } from '../../../snippets';

const MousePositionAtPageOptions = {
  listenerName: 'mousemove',
  props: debounceAndThrottleProps
} as const;

function createInitialData() {
  return {
    x: 0,
    y: 0
  };
}

const MousePositionAtPage = Vue.extend({
  props: MousePositionAtPageOptions.props,
  data: createInitialData,
  methods: {
    [updateFunctionName](event: MouseEvent) {
      this.x = event.pageX;
      this.y = event.pageY;
      emitThisData.call(this, MousePositionAtPageOptions.listenerName);
    }
  },
  render: createRenderScopedSlotsOrRenderlessWithWindowEvent(
    MousePositionAtPageOptions.listenerName
  )
});

type MousePositionAtPageEmittedDataType = ReturnType<typeof createInitialData>;

export {
  MousePositionAtPage,
  MousePositionAtPageOptions,
  MousePositionAtPageEmittedDataType
};
