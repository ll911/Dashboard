export const apiURL = import.meta.env.PROD ? 'https://start.llou.apps' : '/api';
export const publicPath = import.meta.env.VITE_APP_BUILD_MODE === 'crx' ? './' : './'
