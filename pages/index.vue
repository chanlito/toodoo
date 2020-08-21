<template>
  <b-container class="p-3" tag="main" fluid>
    <p class="mb-0">
      Your IP address is <strong>{{ ip }}</strong>
    </p>
  </b-container>
</template>

<script lang="ts">
import { defineComponent, watch, useContext } from '@nuxtjs/composition-api';
import { useIP, useIPMiddleware } from '@/util/ip';

export default defineComponent({
  middleware: [useIPMiddleware],
  setup() {
    const { ip } = useIP();
    return { ip };
  },
});
</script>
