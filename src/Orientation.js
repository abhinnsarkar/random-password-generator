import React, { useEffect, useState } from 'react';

const OrientationLockMessage = () => {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  return (
    <div>
      {isPortrait ? (
        <p>Please rotate your device to landscape mode for a better experience.</p>
      ) : (
        <p>Your device is in landscape mode.</p>
      )}
    </div>
  );
};

export default OrientationLockMessage;
