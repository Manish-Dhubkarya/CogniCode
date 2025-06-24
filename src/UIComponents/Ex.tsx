import React from 'react';

const Ex = () => {
  return (
    <>
      <style>
        {`
          .dots-container {
            display: flex;
            flex-direction: column;
            animation: waveMove 4s linear infinite;
          }

          .dot-line {
            display: flex;
            justify-content: center;
            animation: waveShape 4s ease-in-out infinite alternate;
          }

          .dot {
            width: 2px;
            height: 2px;
            margin: 1px;
            border-radius: 50%;
            background-color: #3b82f6; /* Blue */
            opacity: 0.5;
            animation: pulse 2s infinite ease-in-out;
          }

          @keyframes waveMove {
            0% {
              transform: translateY(0%);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          @keyframes waveShape {
            0%, 100% {
              transform: scaleX(1);
            }
            50% {
              transform: scaleX(0.3);
            }
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 0.4;
              transform: scale(0.9);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }
        `}
      </style>

      <div className="relative w-[300px] h-[475px] bg-transparent overflow-hidden flex items-center justify-center">
        <div className="dots-container">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="dot-line">
              {[...Array(50)].map((_, j) => (
                <div key={j} className="dot" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ex;
