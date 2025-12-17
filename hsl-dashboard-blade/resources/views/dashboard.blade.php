<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>HSL Labs – Daily Operations</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-50 min-h-screen">

  <x-header />

  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

    <!-- Page Title -->
    <div class="mb-6 flex justify-between items-center">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">Daily Operations</h2>
        <p class="text-sm text-gray-500">Wednesday, December 17, 2025</p>
      </div>
    </div>

    <!-- KPI Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <x-kpi-card title="Active Patients" value="127" badge="+12%" />
      <x-kpi-card title="Pending Disclosures" value="18" badge="Urgent" />
      <x-kpi-card title="Inventory Alerts" value="5" badge="Alert" />
      <x-kpi-card title="Today's Revenue" value="$24,850" badge="+8%" />
    </div>

    <!-- Analytics -->
    <x-analytics />

    <!-- Action Tracker -->
    <x-action-table />

  </main>

  <x-mobile-action-bar />

</body>
</html>
