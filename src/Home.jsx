import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Menu,
  X,
  Bell,
  Search,
  Users,
  Package,
  FileText,
  DollarSign,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Download,
  RefreshCw,
  Calendar,
  Settings,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";

const HSLDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [kpi, setKpi] = useState({
    activePatients: 128,
    pendingDisclosures: 18,
    inventoryAlerts: 5,
    revenue: 24850,
  });

  useEffect(() => {
    const i = setInterval(() => {
      setKpi((p) => ({
        ...p,
        activePatients: p.activePatients + Math.floor(Math.random() * 2),
        revenue: p.revenue + Math.floor(Math.random() * 400),
      }));
    }, 5000);
    return () => clearInterval(i);
  }, []);

  const [actions, setActions] = useState([
    {
      id: 1,
      patient: "Sarah Johnson",
      type: "Disclosure",
      priority: "high",
      time: "10 min ago",
      status: "pending",
      timestamp: Date.now() - 600000,
    },
    {
      id: 2,
      patient: "Michael Chen",
      type: "Intake",
      priority: "medium",
      time: "25 min ago",
      status: "pending",
      timestamp: Date.now() - 1500000,
    },
    {
      id: 3,
      patient: "Emma Davis",
      type: "Packaging",
      priority: "high",
      time: "1 hour ago",
      status: "in-progress",
      timestamp: Date.now() - 3600000,
    },
    {
      id: 4,
      patient: "James Wilson",
      type: "Billing",
      priority: "low",
      time: "2 hours ago",
      status: "completed",
      timestamp: Date.now() - 7200000,
    },
    {
      id: 5,
      patient: "Lisa Anderson",
      type: "Disclosure",
      priority: "medium",
      time: "2 hours ago",
      status: "pending",
      timestamp: Date.now() - 7200000,
    },
    {
      id: 6,
      patient: "Robert Martinez",
      type: "Intake",
      priority: "high",
      time: "3 hours ago",
      status: "in-progress",
      timestamp: Date.now() - 10800000,
    },
    {
      id: 7,
      patient: "Jennifer Taylor",
      type: "Packaging",
      priority: "low",
      time: "4 hours ago",
      status: "completed",
      timestamp: Date.now() - 14400000,
    },
    {
      id: 8,
      patient: "David Brown",
      type: "Billing",
      priority: "medium",
      time: "5 hours ago",
      status: "pending",
      timestamp: Date.now() - 18000000,
    },
    {
      id: 9,
      patient: "Maria Garcia",
      type: "Disclosure",
      priority: "high",
      time: "6 hours ago",
      status: "in-progress",
      timestamp: Date.now() - 21600000,
    },
    {
      id: 10,
      patient: "Christopher Lee",
      type: "Intake",
      priority: "low",
      time: "7 hours ago",
      status: "completed",
      timestamp: Date.now() - 25200000,
    },
    {
      id: 11,
      patient: "Amanda White",
      type: "Packaging",
      priority: "medium",
      time: "8 hours ago",
      status: "pending",
      timestamp: Date.now() - 28800000,
    },
    {
      id: 12,
      patient: "Daniel Harris",
      type: "Billing",
      priority: "high",
      time: "9 hours ago",
      status: "in-progress",
      timestamp: Date.now() - 32400000,
    },
  ]);

  const handleStatusChange = useCallback((id, status) => {
    setActions((a) => a.map((i) => (i.id === id ? { ...i, status } : i)));
  }, []);

  const filteredActions = useMemo(() => {
    return actions.filter((i) => {
      const statusMatch =
        selectedStatus === "all" || i.status === selectedStatus;
      const searchMatch =
        i.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
        i.type.toLowerCase().includes(searchQuery.toLowerCase());
      return statusMatch && searchMatch;
    });
  }, [actions, selectedStatus, searchQuery]);

  const paginatedActions = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredActions.slice(start, start + itemsPerPage);
  }, [filteredActions, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredActions.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedStatus, searchQuery]);

  const priorityStyle = (p) => {
    if (p === "high") return "bg-red-50 text-red-600";
    if (p === "medium") return "bg-orange-50 text-orange-600";
    return "bg-green-50 text-green-600";
  };

  const statusIcon = (s) => {
    if (s === "completed")
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    if (s === "in-progress")
      return <Activity className="w-4 h-4 text-blue-600" />;
    return <Clock className="w-4 h-4 text-amber-600" />;
  };

  const handleRefresh = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-blue-600 rounded-xl text-white font-semibold flex items-center justify-center">
                HSL
              </div>
              <span className="hidden sm:block font-semibold text-lg">
                HSL Labs
              </span>
            </div>
          </div>

          <div className="hidden md:flex relative max-w-md w-full mx-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Search patients, actions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl hover:bg-gray-100">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="hidden sm:flex gap-2 items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
              <Calendar className="w-4 h-4" /> Schedule
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white">
          <div className="p-6 space-y-4">
            <button onClick={() => setMenuOpen(false)} className="p-2">
              <X />
            </button>
            <nav className="space-y-2">
              <NavItem icon={<Users />} label="Dashboard" active />
              <NavItem icon={<Users />} label="Patients" />
              <NavItem icon={<Package />} label="Inventory" />
              <NavItem icon={<FileText />} label="Billing" />
              <NavItem icon={<BarChart3 />} label="Reports" />
              <NavItem icon={<Settings />} label="Settings" />
            </nav>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Daily Operations
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-200 rounded-xl flex items-center gap-2 hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" /> Export
            </button>
            <button
              onClick={handleRefresh}
              disabled={loading}
              className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <div className="md:hidden mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Search patients, actions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Kpi
            icon={<Users />}
            label="Active Patients"
            value={kpi.activePatients}
            badge="+12%"
            color="blue"
          />
          <Kpi
            icon={<FileText />}
            label="Pending Disclosures"
            value={kpi.pendingDisclosures}
            badge="Urgent"
            color="amber"
          />
          <Kpi
            icon={<Package />}
            label="Inventory Alerts"
            value={kpi.inventoryAlerts}
            badge="Alert"
            color="red"
          />
          <Kpi
            icon={<DollarSign />}
            label="Today's Revenue"
            value={`$${kpi.revenue.toLocaleString()}`}
            badge="+8%"
            color="green"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ChartWidget
            title="Inventory Distribution"
            type="pie"
            data={[30, 45, 25]}
            colors={["#3B82F6", "#10B981", "#F59E0B"]}
          />

          <AnalyticsCard
            title="Revenue"
            value="$24,850"
            trend="+8%"
            color="green"
          />
          <ChartWidget
            title="Patient Flow (Last 7 Days)"
            type="bar"
            data={[40, 60, 50, 70, 30, 80, 55]}
            colors={[
              "#3B82F6",
              "#60A5FA",
              "#2563EB",
              "#3B82F6",
              "#60A5FA",
              "#2563EB",
              "#3B82F6",
            ]}
          />

          <ChartWidget
            title="Revenue & New Patients (Last 7 Days)"
            type="line"
            data={[
              [40, 60, 50, 70, 30, 60, 55],
              [30, 90, 50, 60, 20, 70, 45],
            ]}
            colors={["#F40B1F", "#10B981"]}
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
          <div className="p-4 flex gap-2 border-b overflow-x-auto">
            {["all", "pending", "in-progress", "completed"].map((s) => (
              <button
                key={s}
                onClick={() => setSelectedStatus(s)}
                className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap transition-colors ${
                  selectedStatus === s
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {s.replace("-", " ")}
              </button>
            ))}
          </div>

          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr className="text-xs text-gray-500 uppercase">
                  <th className="px-6 py-3 text-left">Patient</th>
                  <th className="px-6 py-3 text-left">Type</th>
                  <th className="px-6 py-3 text-left">Priority</th>
                  <th className="px-6 py-3 text-left">Time</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  <th className="px-6 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedActions.map((i) => (
                  <tr
                    key={i.id}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-white flex items-center justify-center text-sm font-medium">
                          {i.patient
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <span className="font-medium">{i.patient}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-gray-600">{i.type}</td>
                    <td className="px-6 py-5">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${priorityStyle(
                          i.priority
                        )}`}
                      >
                        {i.priority}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-gray-500 text-sm">
                      {i.time}
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        {statusIcon(i.status)}
                        <span className="capitalize text-sm">
                          {i.status.replace("-", " ")}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <select
                        value={i.status}
                        onChange={(e) =>
                          handleStatusChange(i.id, e.target.value)
                        }
                        className="border border-gray-200 rounded-xl px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                      >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden">
            {paginatedActions.map((i) => (
              <div
                key={i.id}
                className="border-b p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-white flex items-center justify-center text-sm font-medium">
                      {i.patient
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-medium">{i.patient}</p>
                      <p className="text-sm text-gray-500">{i.type}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${priorityStyle(
                      i.priority
                    )}`}
                  >
                    {i.priority}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    {statusIcon(i.status)}
                    <span className="capitalize">
                      {i.status.replace("-", " ")}
                    </span>
                    <span>• {i.time}</span>
                  </div>
                  <select
                    value={i.status}
                    onChange={(e) => handleStatusChange(i.id, e.target.value)}
                    className="border border-gray-200 rounded-lg px-2 py-1 text-sm"
                  >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
            ))}
          </div>

          {filteredActions.length === 0 && (
            <div className="p-12 text-center">
              <AlertCircle className="w-10 h-10 mx-auto text-gray-400 mb-3" />
              <p className="text-gray-500">No matching records</p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="p-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-600">
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, filteredActions.length)}{" "}
                of {filteredActions.length} results
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex gap-1">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                        currentPage === i + 1
                          ? "bg-blue-600 text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg pb-safe">
        <div className="grid grid-cols-4 p-2">
          <Nav icon={<Users />} label="Patients" active />
          <Nav icon={<Package />} label="Inventory" />
          <Nav icon={<BarChart3 />} label="Reports" />
          <Nav icon={<Settings />} label="Settings" />
        </div>
      </div>
    </div>
  );
};

const AnalyticsCard = ({ title, value, trend, color }) => (
  <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-2xl font-semibold">{value}</p>
    <span className={`text-sm font-medium text-${color}-600`}>{trend}</span>
  </div>
);

const ChartWidget = ({ title, type = "bar", data = [], colors = [] }) => {
  const maxVal = Math.max(...(type === "line" ? data.flat() : data), 1);

  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <p className="text-sm text-gray-500 mb-2">{title}</p>

      {type === "bar" && (
        <div className="flex items-end h-32 gap-1">
          {data.map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-lg transition-all duration-300"
              style={{
                height: `${(v / maxVal) * 100}%`,
                backgroundColor: colors[i] || "#3B82F6",
              }}
            />
          ))}
        </div>
      )}

      {type === "line" && (
        <svg
          className="w-full h-32"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {data.map((line, idx) => {
            const lineColor = colors[idx] || "#3B82F6";
            const points = line
              .map((v, i) => {
                const x = (i / (line.length - 1)) * 100;
                const y = 100 - (v / maxVal) * 100;
                return `${x},${y}`;
              })
              .join(" ");
            return (
              <polyline
                key={idx}
                fill="none"
                stroke={lineColor}
                strokeWidth="2"
                points={points}
              />
            );
          })}
        </svg>
      )}

      {type === "pie" && (
        <svg className="w-full h-32" viewBox="0 0 32 32">
          {(() => {
            const total = data.reduce((a, b) => a + b, 0);
            let cumulative = 0;
            return data.map((v, i) => {
              const startAngle = (cumulative / total) * 2 * Math.PI;
              cumulative += v;
              const endAngle = (cumulative / total) * 2 * Math.PI;
              const x1 = 16 + 16 * Math.cos(startAngle);
              const y1 = 16 + 16 * Math.sin(startAngle);
              const x2 = 16 + 16 * Math.cos(endAngle);
              const y2 = 16 + 16 * Math.sin(endAngle);
              const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
              return (
                <path
                  key={i}
                  d={`M16 16 L${x1} ${y1} A16 16 0 ${largeArc} 1 ${x2} ${y2} Z`}
                  fill={colors[i] || "#3B82F6"}
                />
              );
            });
          })()}
        </svg>
      )}

      {/* Optional x-axis labels for bar/line */}
      {type !== "pie" && (
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          {(type === "bar" ? data : data[0]).map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
      )}
    </div>
  );
};

// const ChartWidget = ({ title, data, color }) => (
//   <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
//     <p className="text-sm text-gray-500 mb-2">{title}</p>
//     <div className="flex items-end h-32 gap-1">
//       {data.map((v, i) => (
//         <div
//           key={i}
//           className="flex-1 rounded-t-lg transition-all duration-300"
//           style={{ height: `${v}%`, backgroundColor: color }}
//         />
//       ))}
//     </div>
//     <div className="flex justify-between text-xs text-gray-400 mt-2">
//       {data.map((_, i) => (
//         <span key={i}>{i + 1}</span>
//       ))}
//     </div>
//   </div>
// );

const Kpi = ({ icon, label, value, badge, color }) => (
  <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between mb-4">
      <div
        className={`w-12 h-12 bg-${color}-50 rounded-xl flex items-center justify-center text-${color}-600`}
      >
        {icon}
      </div>
      <span
        className={`text-xs px-2 py-1 h-fit rounded-full bg-${color}-50 text-${color}-600 font-medium`}
      >
        {badge}
      </span>
    </div>
    <p className="text-sm text-gray-500 mb-1">{label}</p>
    <p className="text-3xl font-semibold tracking-tight">{value}</p>
  </div>
);

const Nav = ({ icon, label, active }) => (
  <button
    className={`flex flex-col items-center gap-1 py-2 transition-colors ${
      active ? "text-blue-600" : "text-gray-600"
    }`}
  >
    {icon}
    <span className="text-xs">{label}</span>
  </button>
);

const NavItem = ({ icon, label, active }) => (
  <button
    className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors ${
      active ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

export default HSLDashboard;
