import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true, variations: false },
    themes: {
      light: {
        text: '#000000',
        background: '#FFFFFF',
        primary: '#1e7ce7'
      },
      dark: {
        text: '#FFFFFF',
        background: '#000000',
        primary: '#DC143C'
      }
    }
  }
});
