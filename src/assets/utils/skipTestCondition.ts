import useEnv, { TestingMode } from '@hooks/useEnv';

const { TESTING_MODE } = useEnv();

const skipTestCondition = (mode: TestingMode): boolean => {
  if (TESTING_MODE === 'FULLSTACK') {
    return false;
  }

  return TESTING_MODE !== mode;
};

export { skipTestCondition as default };
