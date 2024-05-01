import React from "react";
import Sidebar from "./Sidebar";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

function Dashboard() {
  const countryData = [
    { country: "USA", employees: 20 },
    { country: "Canada", employees: 15 },
    { country: "Mexico", employees: 10 },
  ];

  // Employees per department
  const departmentData = [
    { department: "Sales", employees: 25 },
    { department: "Marketing", employees: 15 },
    { department: "Engineering", employees: 20 },
  ];

  const BarComponent = ({ employees, department }) => {
    const width = `${employees}%`;

    return (
      <div className="flex items-center mb-2">
        <div className="w-32 text-left pr-2">{department}</div>
        <div className="h-6 bg-blue-500 rounded-md" style={{ width }} />
      </div>
    );
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <>
      <div className="flex flex-row bg-slate-400">
        <div className="w-1/6 bg-[#334252] h-[56]">
          <Sidebar />
        </div>

        <div className="w-5/6 h-full">
          <div className="w-[56] bg-white p-5 h-[56]">
            <h1 className="text-slate-900 font-bold px-4">Dashboard</h1>
          </div>

          <div className="flex flex-col h-full bg-blue-50">
            <div className="h-1/2 m-6 bg-white rounded">
              <h3 className="font-bold p-4">Employee vs Region</h3>
              <div className="flex flex-row">
                <div>
                  <PieChart width={254} height={254} className="static">
                    <Pie
                      data={countryData}
                      cx={127}
                      cy={127}
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="employees"
                    >
                      {countryData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </div>
                <div className="p-8 px-16">
                  <table>
                    <thead>
                      <tr>
                        <th className="px-4">Country</th>
                        <th>Employees</th>
                      </tr>
                    </thead>
                    <tbody>
                      {countryData.map((item, index) => (
                        <tr key={item.country}>
                          <td className="px-4">{item.country}</td>
                          <td>{item.employees}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="bg-white m-6 mt-0 h-1/2 rounded">
              <h3 className="text-slate-900 font-bold pt-4 px-8">Departments</h3>
              <h2 className="text-slate-900 font-bold px-8 pb-4">
                {departmentData.length}
              </h2>
              <div className="p-8 font-medium">
                {departmentData.map((item, index) => (
                  <BarComponent
                    key={index}
                    department={item.department}
                    employees={item.employees}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
