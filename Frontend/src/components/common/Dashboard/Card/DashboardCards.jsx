import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import "./DashboardCards.css";

export const DashboardMenuCard = ({ icon, title, count, link }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(link)} className="dashboard-menu-card">
      <div className="dashboard-menu-card-icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="dashboard-menu-card-count">{count}</div>
      <div className="dashboard-menu-card-title">{title}</div>
    </div>
  );
};

export const DashboardBarChart = ({ data }) => {
  return (
    <div
      style={{ width: "100%", height: "400px" }}
      className="dashboard-bar-chart "
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const DashboardPieChart = () => {
  const data = [
    { name: "Completed Days", value: 400 },
    { name: "Pending Days", value: 100 },
  ];

  const totalDays = data.reduce((sum, entry) => sum + entry.value, 0);
  const completedDays =
    data.find((entry) => entry.name === "Completed Days")?.value || 0;
  const remainingDays = totalDays - completedDays;

  const renderCenterLabel = () => {
    return (
      <text
        x="50%"
        y="50%"
        fill="black"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="16"
      >
        {`${remainingDays} days remaining`}
      </text>
    );
  };

  const COLORS = ["#9686FF", "#F2F2F2"];

  return (
    <>
      <div style={{ width: "100%", height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              innerRadius={80}
              startAngle={90}
              endAngle={-270}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            {renderCenterLabel()}
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="d-flex flex-column justify-content-center gap-2 text-xl bold">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <p
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#9686FF",
              marginRight: "8px",
            }}
          ></p>
          <span className="m-0">Completed Days</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <p
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "gray",
              marginRight: "8px",
            }}
          ></p>
          <span>Pending Days</span>
        </div>
      </div>
    </>
  );
};

export default DashboardPieChart;
