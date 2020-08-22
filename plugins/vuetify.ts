import { Context } from '@nuxt/types';
import Vue from 'vue';
import { UserVuetifyPreset, VuetifyUseOptions } from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import Vuetify from 'vuetify/lib/framework';

export default function(ctx: Context) {
  const useOptions: VuetifyUseOptions = {};

  Vue.use(Vuetify, useOptions);

  const options: UserVuetifyPreset = {
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.deepPurple.darken4,
        },
      },
    },
  };

  ctx.app.vuetify = new Vuetify(options);
}
