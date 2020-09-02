import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const getEnv = (name: string) => publicRuntimeConfig[name];

export default getEnv;
