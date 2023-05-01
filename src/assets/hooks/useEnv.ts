export type TestingMode = 'FRONTEND' | 'BACKEND' | 'FULLSTACK';

export interface Env {
  API_URL?: string;
  TESTING_MODE?: TestingMode;
  DOMAIN?: string;
  APP_PORT?: number;
  SSL?: {
    WEBSOCKET?: string;
    HTTP?: string;
  };
}

const useEnv = (): Env => {
  const env = import.meta.env;

  return {
    API_URL: env.VITE_API_URL,
    TESTING_MODE: env.VITE_TESTING_MODE,
    DOMAIN: env.VITE_DOMAIN,
    APP_PORT: env.VITE_APP_PORT,
    SSL: {
      WEBSOCKET: env.VITE_WS_SSL,
      HTTP: env.VITE_HTTP_SSL,
    },
  };
};

export default useEnv;
