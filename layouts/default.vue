<template>
  <v-app>
    <v-app-bar app elevate-on-scroll>
      <v-container class="d-flex align-center py-0 px-0 px-sm-0 px-md-4" style="max-width: 1080px;">
        <v-app-bar-nav-icon class="ml-n3 mr-1 hidden-sm-and-up" />
        <app-logo />
        <v-spacer />
        <v-btn class="mr-2" text><span class="text--primary">Log In</span></v-btn>
        <v-btn color="primary">Sign Up</v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
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
