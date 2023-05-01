import { useState } from 'react';

type UseBooleanType = [
  value: boolean,
  toggleValue: () => void,
];

const useBoolean = (initialValue?: boolean): UseBooleanType => {
  // prettier-ignore
  const [localValue, setLocalValue] = useState<boolean>(initialValue ? initialValue : false);

  return [
    localValue,
    () => setLocalValue((prevValue) => !prevValue)
  ];
};

export default useBoolean;
