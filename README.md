# Investment Calculator

A React-based investment calculator that helps users visualize their investment growth over time with compound interest.

## Features

- Calculate investment growth with compound interest
- Visualize yearly investment growth
- Responsive design that works on desktop and mobile
- Real-time calculation as you adjust inputs

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd investment-calculator
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
investment-calculator/
├── public/
│   └── investment-calculator-logo.png
├── src/
│   ├── components/
│   │   └── header.jsx
│   ├── util/
│   │   └── investment.js
│   ├── App.jsx
│   ├── index.css
│   └── index.jsx
├── index.html
└── vite.config.js
```

## Components

### Header Component

Contains the input fields for investment parameters:

- Initial Investment
- Annual Investment
- Expected Return (%)
- Duration (years)

### Investment Utility

Calculates compound interest and returns annual investment growth data.

## Technologies Used

- React 19
- Vite
- CSS3

## How It Works

The calculator uses the compound interest formula to calculate investment growth:

```
Future Value = Present Value × (1 + r)^n + PMT × [((1 + r)^n - 1) / r]
```

Where:

- r = Expected return rate
- n = Number of years
- PMT = Annual investment amount

### Results Display

The results are displayed in a clear table format showing the growth of your investment over time:

| Year | Investment Value | Interest (Year) | Total Interest | Invested Capital |
| ---- | ---------------- | --------------- | -------------- | ---------------- |
| 1    | $2,050           | $50             | $50            | $2,000           |
| 2    | $3,153           | $103            | $153           | $3,000           |
| 3    | $4,310           | $158            | $310           | $4,000           |

This format makes it easy to see how your investment grows year over year, including the compound interest earned and total capital invested.
