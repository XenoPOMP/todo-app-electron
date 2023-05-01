import { FC, useEffect } from 'react';
import { EndlessTimerProps } from './EndlessTimer.props';

const EndlessTimer: FC<EndlessTimerProps> = ({ callback, interval }) => {
  useEffect(() => {
    const timerId = setInterval(callback, interval);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <></>;
};

export default EndlessTimer;
