<div class="bg-white rounded-xl border shadow-sm">
  <div class="p-4 border-b">
    <h3 class="font-semibold">Action Tracker</h3>
  </div>

  <table class="w-full text-sm">
    <thead class="bg-gray-50">
      <tr>
        <th class="p-3 text-left">Patient</th>
        <th class="p-3 text-left">Type</th>
        <th class="p-3 text-left">Status</th>
      </tr>
    </thead>
    <tbody>
      @foreach ([
        ['Sarah Johnson','Disclosure','Pending'],
        ['Michael Chen','Intake','Pending'],
        ['Emma Davis','Packaging','In Progress'],
        ['James Wilson','Billing','Completed']
      ] as $item)
        <tr class="border-t">
          <td class="p-3 font-medium">{{ $item[0] }}</td>
          <td class="p-3">{{ $item[1] }}</td>
          <td class="p-3 text-gray-600">{{ $item[2] }}</td>
        </tr>
      @endforeach
    </tbody>
  </table>
</div>
