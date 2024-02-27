const LoadingSpinner = ({ name }: { name: string }) => (
  <div className="w-full h-full backdrop-blur bg-white/50">
    <div className="flex flex-col items-center gap-20 mt-10 text-4xl">
      <h1>{name}</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        style={{
          height: "400px",
        }}
      >
        <circle
          fill="#7E22CE"
          stroke="#7E22CE"
          strokeWidth="15"
          r="15"
          cx="40"
          cy="65"
        >
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="2"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.4"
          ></animate>
        </circle>
        <circle
          fill="#7E22CE"
          stroke="#7E22CE"
          strokeWidth="15"
          r="15"
          cx="100"
          cy="65"
        >
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="2"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.2"
          ></animate>
        </circle>
        <circle
          fill="#7E22CE"
          stroke="#7E22CE"
          strokeWidth="15"
          r="15"
          cx="160"
          cy="65"
        >
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="2"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="0"
          ></animate>
        </circle>
      </svg>
    </div>
  </div>
);

export default LoadingSpinner;
