import { Context } from '@nuxt/types';
import { useContext } from '@nuxtjs/composition-api';
import useSWRV from 'swrv';

export function useIP() {
  const { $axios, req } = useContext();
  const getIP = async () => {
    return (
      req?.headers?.['x-real-ip'] || req?.headers?.['x-forwarded-for'] || (await $axios.$get('https://icanhazip.com/'))
    );
  };
  const { data: ip } = useSWRV('ip', getIP);
  return { ip };
}

export function useIPMiddleware({ req }: Context) {
  if (process.server) {
    // TODO: Send IP to FBI
    console.log(req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress);
  }
}
