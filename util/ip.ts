import { Context } from '@nuxt/types';
import { useContext, computed, watch } from '@nuxtjs/composition-api';

export function useIP() {
  const { req } = useContext();
  const ip = computed(() => req?.headers?.['x-real-ip'] || req?.headers?.['x-forwarded-for'] || 'localhost');
  return { ip };
}

export function useIPMiddleware({ req }: Context) {
  if (process.server) {
    // TODO: Send IP to FBI
    console.log(req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress);
  }
}

// TODO:
// async function getIP(req?: any): Promise<string> {
//   return (
//     req?.headers?.['x-real-ip'] ||
//     req?.headers?.['x-forwarded-for'] ||
//     fetch('https://www.cloudflare.com/cdn-cgi/trace')
//       .then(res => res.text())
//       .then(text => {
//         console.log('?', text);
//         return '';
//       })
//   );
// }
