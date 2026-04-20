import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Results({ input }) {
  const res = calculateInvestmentResults(input);
  return (
    <table id="result">
      <thead className="center">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {res.map((yearData) => {
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>
                {formatter.format(
                  yearData.valueEndOfYear -
                    input.initialInvestment -
                    yearData.annualInvestment * yearData.year,
                )}
              </td>
              <td>
                {formatter.format(
                  input.initialInvestment +
                    yearData.annualInvestment * yearData.year,
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
