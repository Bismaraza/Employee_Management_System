function SearchFilter({ search, setSearch, department, setDepartment }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <div className="grid gap-4 md:grid-cols-[1fr_220px]">
        <input value={search} onChange={(e) => setSearch(e.target.value)}
          placeholder="Search employees..."
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500" />
        <select value={department} onChange={(e) => setDepartment(e.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500">
          <option value="All">All Departments</option>
          <option>Engineering</option><option>Design</option>
          <option>Human Resources</option><option>Marketing</option><option>Finance</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;