<div class="bg-white rounded-xl p-6 border shadow-sm mb-6">
  <h3 class="text-lg font-semibold mb-4">Patient Activity (Last 7 days)</h3>

  <div class="h-64 flex items-end gap-2">
    @foreach ([45,52,48,61,58,35,28] as $day)
      <div class="flex-1 bg-blue-100 rounded-t-lg" style="height: {{ $day }}%"></div>
    @endforeach
  </div>

  <div class="flex justify-between text-xs text-gray-500 mt-2">
    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span>
    <span>Fri</span><span>Sat</span><span>Sun</span>
  </div>
</div>
