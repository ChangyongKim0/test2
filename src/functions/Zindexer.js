import React, { useState, useContext, createContext } from "react";

export const ZIndexContext = createContext({
  zIndexes: [],
  addZIndex: (_) => {},
  removeZIndex: (_) => {},
});

export function ZIndexProvider({ children }) {
  const [zIndexes, setZIndexes] = useState([]);

  const addZIndex = (zIndex) => {
    setZIndexes((zIndexes) => [...zIndexes, zIndex]);
  };

  const removeZIndex = (zIndex) => {
    setZIndexes((zIndexes) => {
      const index = zIndexes.findIndex((usedZIndex) => usedZIndex === zIndex);
      return zIndexes.filter((_, i) => i !== index);
    });
  };

  const value = { zIndexes, addZIndex, removeZIndex };

  return (
    <ZIndexContext.Provider value={value}>{children}</ZIndexContext.Provider>
  );
}

const defaultZIndex = 30;

function ZIndexer({ children }) {
  const { zIndexes, addZIndex, removeZIndex } = useContext(ZIndexContext);

  const hasLastIndex = zIndexes.length > 0;
  const nextZIndex = hasLastIndex
    ? zIndexes[zIndexes.length - 1] + 1
    : defaultZIndex;

  return children({ zIndex: nextZIndex });
}

export default ZIndexer;
