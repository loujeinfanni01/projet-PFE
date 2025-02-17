"use client";
import { useState } from "react";
import { Search, Settings, BarChart2, Users, AlertTriangle } from "lucide-react";
import dynamic from "next/dynamic";
import Navbar from "./components/ui/Navbar"; // Navbar importé correctement

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Dashboard = () => {
  const [appointments] = useState([
    { student: "Emma Johnson", psychologist: "Dr. Alice Martin", date: "2025-02-20", status: "Completed" },
    { student: "Michael Brown", psychologist: "Dr. John Doe", date: "2025-02-21", status: "Pending" },
  ]);

  const stats = {
    totalPsychologists: 25,
    totalConsultations: 1052,
    pendingAppointments: 12,
    satisfactionRate: 4.7,
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Navbar en haut */}
      <Navbar />

      <main className="p-6 flex-1">
        {/* Statistiques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-gray-800 flex flex-col items-center justify-center rounded-lg">
            <Users className="text-blue-400 mb-2" />
            <div className="text-lg font-semibold">{stats.totalPsychologists}</div>
            <div className="text-gray-400">Total Psychologists</div>
          </div>
          <div className="p-4 bg-gray-800 flex flex-col items-center justify-center rounded-lg">
            <BarChart2 className="text-green-400 mb-2" />
            <div className="text-lg font-semibold">{stats.totalConsultations}</div>
            <div className="text-gray-400">Total Consultations</div>
          </div>
          <div className="p-4 bg-gray-800 flex flex-col items-center justify-center rounded-lg">
            <AlertTriangle className="text-yellow-400 mb-2" />
            <div className="text-lg font-semibold">{stats.pendingAppointments}</div>
            <div className="text-gray-400">Pending Appointments</div>
          </div>
          <div className="p-4 bg-gray-800 flex flex-col items-center justify-center rounded-lg">
            <div className="text-lg font-semibold">{stats.satisfactionRate} ⭐</div>
            <div className="text-gray-400">Avg. Satisfaction</div>
          </div>
        </div>

        {/* Appointments Table */}
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <h2 className="text-lg font-bold mb-2">Recent Appointments</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-2">Student</th>
                <th className="p-2">Psychologist</th>
                <th className="p-2">Date</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="p-2">{appt.student}</td>
                  <td className="p-2">{appt.psychologist}</td>
                  <td className="p-2">{appt.date}</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded text-white ${
                      appt.status === "Cancelled" ? "bg-red-500" : 
                      appt.status === "Pending" ? "bg-orange-500" : 
                      "bg-green-500"
                    }`}>
                      {appt.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Performance Analytics */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Performance Analytics</h2>
          <Chart 
            options={{ 
              chart: { id: "consultations-chart" }, 
              xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] } 
            }} 
            series={[{ name: "Consultations", data: [30, 50, 80, 120, 150] }]} 
            type="bar" 
            height={250} 
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
