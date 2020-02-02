import { VNode, CreateElement } from 'vue/types/umd';

function renderNothing(): VNode {
  return null as any;
}

function renderScopedSlotsOrRenderlessWithThisData(
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

function renderDefaultSlots(this: any, h: CreateElement): VNode {
  const slotNodes = this.$slots.default;

  if (!slotNodes) {
    return renderNothing();
  }

  return h('div', slotNodes);
}

function renderScopedSlotsWithData(
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
  renderScopedSlotsWithData,
  renderScopedSlotsOrRenderlessWithThisData,
  renderDefaultSlots,
  renderNothing
};
