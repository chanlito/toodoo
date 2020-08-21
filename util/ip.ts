import { Context } from '@nuxt/types';
import { shallowSsrRef, useContext } from '@nuxtjs/composition-api';

export function useIP() {
  const { req } = useContext();
  const ip = shallowSsrRef(req?.headers?.['x-real-ip'] || 'localhost');
  return { ip };
}

export function useIPMiddleware({ req }: Context) {
  if (process.server) {
    // TODO: Send IP to FBI
    console.log(req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress);
  }
}
