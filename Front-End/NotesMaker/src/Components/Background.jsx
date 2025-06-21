import React from 'react';

const Background = () => {
  return (
    <div className="absolute inset-0 z-[-1] pointer-events-none">
      <div className="
        absolute inset-0 
        bg-[linear-gradient(to_right,rgba(79,79,79,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,79,79,0.18)_1px,transparent_1px)] 
        bg-[size:14px_24px] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
      </div>
    </div>
  );
};

export default Background;
