<template>
  <b-container>
    <p>Client lucky number is {{ clientNumber }}</p>
    <p v-if="serverNumber">
      Server lucky number is <b>{{ serverNumber }}</b>
    </p>

    <b-button variant="primary" @click="refreshLuckyNumber">Get New</b-button>
  </b-container>
</template>

<script lang="ts">
import { getHostURL } from '@/util';
import { defineComponent, watch, useContext, computed } from '@nuxtjs/composition-api';
import useSWRV, { mutate } from 'swrv';

async function getNumber(req?: any) {
  try {
    const API_URL = `${getHostURL(req)}/api/lucky-number`;
    const data = await fetch(API_URL).then((res) => res.json());
    return data.number;
  } catch (err) {
    return 0;
  }
}

export default defineComponent({
  middleware: ['ip'],
  setup() {
    const { req } = useContext();
    const clientNumber = computed(() => Math.ceil(Math.random() * 1000));
    const { data: serverNumber, mutate, error } = useSWRV('/api/lucky-number', () => getNumber(req));
    const refreshLuckyNumber = () => mutate();
    return {
      clientNumber,
      serverNumber,
      refreshLuckyNumber,
    };
  },
});
</script>
