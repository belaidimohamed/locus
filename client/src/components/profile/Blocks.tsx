import React from 'react';

export function Blocks({blocks}: any) {
  return (
    <div>
      <h2>Blocks:</h2>
      {blocks.length === 0 && (
        <>
          <h2>Empty</h2>
        </>
      )}
    </div>
  );
};
