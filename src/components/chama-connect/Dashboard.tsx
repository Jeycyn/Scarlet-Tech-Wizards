// components/chamaconnect/Dashboard.tsx
"use client";

const Dashboard = () => {
  return (
    <div className="dashboard-container" data-aos="zoom-in">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
        <h2>The "Elite Pioneers" Chama</h2>
        <button className="btn-green">+ MAKE CONTRIBUTION</button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h4>Total Group Savings</h4>
          <p id="totalSavings">KSh 1,240,000</p>
        </div>
        <div className="stat-card">
          <h4>Total Interest Earned</h4>
          <p style={{ color: "#10b981" }}>+ KSh 84,500</p>
        </div>
        <div className="stat-card">
          <h4>Next Payout Date</h4>
          <p style={{ fontSize: "1.2rem", paddingTop: "10px" }}>15th Feb 2026</p>
        </div>
      </div>

      <h3>Recent Contributions</h3>
      <table className="contribution-table">
        <thead>
          <tr>
            <th>MEMBER NAME</th>
            <th>DATE</th>
            <th>AMOUNT (KSH)</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice Wambui</td>
            <td>Today</td>
            <td>10,000</td>
            <td><span className="status-paid">VERIFIED</span></td>
          </tr>
          <tr>
            <td>David Kipkorir</td>
            <td>Yesterday</td>
            <td>10,000</td>
            <td><span className="status-paid">VERIFIED</span></td>
          </tr>
          <tr>
            <td>Mercy Njeri</td>
            <td>28 Jan 2026</td>
            <td>10,000</td>
            <td><span className="status-paid">VERIFIED</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

