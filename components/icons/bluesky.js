export default (props) => (
  <svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="MyGradient" gradientTransform="rotate(90)">
        <stop offset="0%" stop-color="#0063ff" />
        <stop offset="100%" stop-color="#0091fa" />
      </linearGradient>
    </defs>
    <path
      d="M226.31,0.03H62.46c-34.29,0-62.09,27.8-62.09,62.09v163.86c0,34.29,27.8,62.09,62.09,62.09h163.86
		c34.29,0,62.09-27.8,62.09-62.09V62.12C288.41,27.83,260.61,0.03,226.31,0.03z M97.25,143.92l-21.88,17.75l-20.85-18.16
		l-33.44,5.57l34.68-17.34l19.81,14.24l21.26-13.83l38.8,28.07L97.25,143.92z M128.67,84.83L83.85,92.3l46.47-23.24l26.56,19.09
		l28.49-18.53l52.01,37.62l-51.45-21.85l-29.32,23.79L128.67,84.83z M228.29,166.12l-14.22,11.54l-13.55-11.8l-21.73,3.62
		l22.54-11.27l12.88,9.26l13.82-8.99l25.22,18.24L228.29,166.12z"
    />
    <path
      className="colored outer"
      fill="url(#MyGradient)"
      d="M226.31,0.03H62.46c-34.29,0-62.09,27.8-62.09,62.09v163.86c0,34.29,27.8,62.09,62.09,62.09h163.86
		c34.29,0,62.09-27.8,62.09-62.09V62.12C288.41,27.83,260.61,0.03,226.31,0.03z M97.25,143.92l-21.88,17.75l-20.85-18.16
		l-33.44,5.57l34.68-17.34l19.81,14.24l21.26-13.83l38.8,28.07L97.25,143.92z M128.67,84.83L83.85,92.3l46.47-23.24l26.56,19.09
		l28.49-18.53l52.01,37.62l-51.45-21.85l-29.32,23.79L128.67,84.83z M228.29,166.12l-14.22,11.54l-13.55-11.8l-21.73,3.62
		l22.54-11.27l12.88,9.26l13.82-8.99l25.22,18.24L228.29,166.12z"
    />
    <polygon
      className="colored inner"
      points="83.89,92.29 130.36,69.05 156.92,88.14 185.41,69.6 237.41,107.22 185.96,85.37 156.64,109.16 128.7,84.82"
    />
    <polygon
      className="colored inner"
      points="21.12,149.07 55.79,131.73 75.61,145.97 96.87,132.14 135.67,160.21 97.28,143.91 75.4,161.66 54.55,143.5"
    />
    <polygon
      className="colored inner"
      points="178.82,169.46 201.36,158.19 214.24,167.44 228.05,158.46 253.27,176.7 228.32,166.1 214.1,177.64 200.56,165.83"
    />
  </svg>
);
