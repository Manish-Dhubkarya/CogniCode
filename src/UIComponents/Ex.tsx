const Ex = () => {
  return (
    <>
      <style>
        {`
          .scene {
            width: 300px;
            height: 475px;
            perspective: 800px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            background: black;
          }

          .grid {
            position: relative;
            width: 200px;
            height: 400px;
            transform-style: preserve-3d;
            animation: rotateGrid 6s linear infinite;
          }

          .dot {
            position: absolute;
            width: 3px;
            height: 3px;
            border-radius: 50%;
            background: #3b82f6; /* blue */
            opacity: 0.8;
          }

          @keyframes rotateGrid {
            0% {
              transform: rotateY(0deg);
            }
            100% {
              transform: rotateY(360deg);
            }
          }
        `}
      </style>

      <div className="scene">
        <div className="grid">
          {
            [...Array(40)].map((_, i) => {
              const y = (i - 20) * 10;
              return [...Array(40)].map((_, j) => {
                const angle = (j / 40) * 2 * Math.PI;
                const radius = 80 * Math.cos((i / 40) * Math.PI);
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;

                return (
                  <div
                    key={`${i}-${j}`}
                    className="dot"
                    style={{
                      transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                    }}
                  />
                );
              });
            })
          }
        </div>
      </div>
    </>
  );
};

export default Ex;
