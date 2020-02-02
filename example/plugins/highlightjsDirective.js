import Vue from 'vue';
import VueHighlightJS from 'vue-highlight.js';

// Highlight.js languages (Only required languages)
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'highlight.js/lib/languages/xml';
import typescript from 'highlight.js/lib/languages/typescript';

/*
 * Use Vue Highlight.js
 */
Vue.use(VueHighlightJS, {
  // Register only languages that you want
  languages: {
    css,
    javascript,
    typescript,
    vue
  }
});
