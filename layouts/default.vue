<template>
  <v-app>
    <v-app-bar app color="white" elevate-on-scroll>
      <app-container>
        <h6 class="text-h6">TooDoo</h6>
      </app-container>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer app>
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
