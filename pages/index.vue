<template>
  <v-container style="max-width: 1080px;">
    <p class="mb-0">
      This is a work in progress.
    </p>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useIPMiddleware } from '@/util/ip';

export default defineComponent({
  middleware: [useIPMiddleware],
});
</script>
