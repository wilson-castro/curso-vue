import Vue from 'vue';
import App from './App';

new Vue({
  el: '#app',
  render(createElement){
    return createElement(App)
  }
})

/** Versão Criada pelo client 'vue create'
 * new Vue({
 *   render: h => h(App)
 * }).$mount("#app")
 */