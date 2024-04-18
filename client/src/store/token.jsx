import React, { createContext } from 'react';

export const tokenContext = createContext();

const storeTokenInLS = (serverToken) => {
  return localStorage.setItem('token', serverToken);
};

function Token() {
  return (
    <div>
      <tokenContext.Provider value={storeTokenInLS}>
        {/* Your components or other context providers */}
      </tokenContext.Provider>
    </div>
  );
}

export default Token;
