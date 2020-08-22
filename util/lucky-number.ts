import { useContext, watch } from '@nuxtjs/composition-api';
import useSWRV from 'swrv';

import { getHostURL } from './url-helpers';

export function useLuckyNumber() {
  const { req } = useContext();

  async function getNumber() {
    const API_URL = `${getHostURL(req)}/api/lucky-number`;
    const data = await fetch(API_URL).then(res => res.json());
    return data.number;
  }

  const { data: luckyNumber, mutate, error } = useSWRV('/api/lucky-number', getNumber);

  const refreshLuckyNumber = () => mutate();

  watch(
    () => error,
    err => {
      console.log(err);
    },
  );

  return {
    luckyNumber,
    refreshLuckyNumber,
  };
}
