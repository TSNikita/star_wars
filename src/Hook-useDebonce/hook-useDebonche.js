import React, { useCallback, useState } from "react";
import _ from "lodash";

export const useDebounce = (obj, wait) => {
  const [state, setState] = useState(obj);

  const setDebouncedState = (_val) => {
    debounce(_val);
  };

  const debounce = useCallback(
    _.debounce((_prop) => {
      console.log("update seacrh!!!");
      setState(_prop);
    }, (wait = 3000)),
    []
  );

  return [state, setDebouncedState];
};
