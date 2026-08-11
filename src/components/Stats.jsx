function Stats({ total, visible }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-medium text-slate-500">Total Employees</p>
        <p className="mt-2 text-3xl font-black">{total}</p>
      </div>
      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-medium text-slate-500">Visible Employees</p>
        <p className="mt-2 text-3xl font-black text-blue-600">{visible}</p>
      </div>
    </div>
  );
}

export default Stats;