import { VNode, CreateElement } from 'vue/types/umd';

function renderNothing(): VNode {
  return null as any;
}

function renderScopedSlotOrRenderlessWithData(
  this: any,
  h: CreateElement
): VNode {
  const normalizedDefaultScopedSlots = this.$scopedSlots.default;

  if (!normalizedDefaultScopedSlots) {
    return renderNothing();
  }

  const slotNodes = normalizedDefaultScopedSlots(this.$data);

  return h('div', slotNodes);
}

function renderDefaultSlot(this: any, h: CreateElement): VNode {
  const slotNodes = this.$slots.default;

  if (!slotNodes) {
    return renderNothing();
  }

  return h('div', slotNodes);
}

function renderScopedSlotWithData(
  this: any,
  h: CreateElement,
  data: object
): VNode {
  const normalizedDefaultScopedSlots = this.$scopedSlots.default;

  if (!normalizedDefaultScopedSlots) {
    return renderNothing();
  }

  const slotNodes = normalizedDefaultScopedSlots(data);

  return h('div', slotNodes);
}

export {
  renderScopedSlotWithData,
  renderScopedSlotOrRenderlessWithData,
  renderDefaultSlot,
  renderNothing
};
