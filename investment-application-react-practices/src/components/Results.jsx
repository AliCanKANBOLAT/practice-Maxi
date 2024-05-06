// Results.jsx
import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);

  if (!resultsData) {
    return <p>Loading...</p>;
  }

  if (resultsData.length === 0) {
    return <p>No results found</p>;
  }

  const initialInvestment = input.InitialInvestment;
  
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData, index) => {
          const totalInterest = yearData.valueEndOfYear - initialInvestment - yearData.annualInvestment * index;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
