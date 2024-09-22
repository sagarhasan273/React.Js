import React from 'react';

function PositionCSS() {
  return (
    <div style={{ margin: '100px' }}>
      <div style={{ height: '100px', width: '100px', background: 'red' }}>items div 2</div>
      <div style={{ height: '100px', width: '100px', background: 'red', position: 'absolute', zIndex: 1 }}>
        <div style={{ position: 'relative' }}>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
      </div>
      <div style={{ height: '100px', width: '100px', background: 'red' }}>items div 1</div>
    </div>
  );
}

export default PositionCSS;
