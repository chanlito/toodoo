<template>
  <v-container style="max-width: 1080px;">
    <div class="d-flex flex-column align-center my-8 my-sm-16">
      <h1 class="text-h3 text-sm-h2 font-weight-bold text-center">
        Gotta do 'em all <br />
        with TooDoo
      </h1>
      <v-btn class="mt-6" color="primary" large>Get Started</v-btn>
    </div>
    <div class="d-flex justify-center py-8 my-8 my-sm-16">
      <v-img :src="require('@/assets/svgs/undraw_to_do_list_a49b.svg')" :aspect-ratio="1" :max-height="480" contain />
    </div>
    <div class="d-flex flex-column align-center my-8 my-sm-16">
      <h1 class="text-h3 text-sm-h2 font-weight-bold text-center">
        Life shouldn't be chaos.
      </h1>
      <p class="body-1 my-8">
        From business ventures to grocery lists, divide and conquer your daily tasks in shared projects.
      </p>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useIPMiddleware } from '@/util/ip';

export default defineComponent({
  middleware: [useIPMiddleware],
});
</script>
