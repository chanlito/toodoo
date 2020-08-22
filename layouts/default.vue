<template>
  <v-app>
    <v-app-bar app color="white" elevate-on-scroll>
      <v-container class="py-0 px-0 px-sm-0 px-md-4" style="max-width: 1080px;">
        <v-app-bar-nav-icon class="ml-n3 hidden-sm-and-up" />
        <app-logo />
      </v-container>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-divider style="margin-bottom: 36px;"></v-divider>
    <v-footer app>
      <div>&#169; {{ new Date().getFullYear() }}</div>
      <v-spacer />
      <div>
        IP: <strong>{{ ip }}</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api';
import { useIP } from '@/util/ip';

export default defineComponent({
  setup() {
    const { ip } = useIP();
    return { ip };
  },
});
</script>
