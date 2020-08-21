import { Middleware } from '@nuxt/types';

const ip: Middleware = ({ req }) => {
  if (process.server) {
    console.log('IP:', req.connection.remoteAddress);
  }
};

export default ip;
