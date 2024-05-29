// src/components/CameraComponent.js
import React from 'react';
import Webcam from 'react-webcam';

const CameraComponent = () => {
  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: 'user',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Webcam
        audio={false}
        height={480}
        screenshotFormat="image/jpeg"
        width={640}
        videoConstraints={videoConstraints}
      />
    </div>
  );
};

export default CameraComponent;
