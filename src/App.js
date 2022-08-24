import React from "react"

function App() {
  const balance = 921.48
  const totalSpent = 478.33
  return (
    <div className="App">
      <div className="balance-div">
        <h3 className="my-balance">My balance</h3>
        <h2 className="total-balance">${balance}</h2>
      </div>
      <div className="chart-div">
        <h2 className="spending-text">Spending - Last 7 days</h2>
        <div className="spending-chart">
        <br/><br/><br/><br/><br/><br/>
        </div>
        <div className="total">
          <h4 className="last-month-total grey">Total this month</h4>
          <div className="flex">
            <h2 className="total-spent">${totalSpent}</h2>
            <div className="last-month-comparison">
              <h4 className="last-month-percentage">+2.4%</h4>
              <p className="last-month grey">from last month</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
