<template>
  <app-container>
    <p class="mb-0">
      This is a work in progress.
    </p>
  </app-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useIPMiddleware } from '@/util/ip';

export default defineComponent({
  middleware: [useIPMiddleware],
});
</script>
