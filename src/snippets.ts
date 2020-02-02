function emitThisData(this: any, listenerName: string) {
  if (this.$listeners[listenerName]) {
    this.$emit(listenerName, this.$data);
  }
}

export { emitThisData };
