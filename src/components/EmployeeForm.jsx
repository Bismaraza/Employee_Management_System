import { useEffect, useState } from "react";

const emptyForm = { name: "", email: "", role: "", department: "Engineering", salary: "" };

function EmployeeForm({ editingEmployee, onSave, onCancel }) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (editingEmployee) {
      setForm({
        name: editingEmployee.name,
        email: editingEmployee.email,
        role: editingEmployee.role,
        department: editingEmployee.department,
        salary: editingEmployee.salary
      });
    } else {
      setForm(emptyForm);
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.role.trim()) return;

    onSave({ ...form, salary: Number(form.salary) || 0 });
    if (!editingEmployee) setForm(emptyForm);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-xl font-bold text-slate-900">
        {editingEmployee ? "Edit Employee" : "Add Employee"}
      </h2>
      <p className="mt-1 text-sm text-slate-500">Manage employee information.</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Full name"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500" />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500" />
        <input name="role" value={form.role} onChange={handleChange} placeholder="Job role"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500" />
        <select name="department" value={form.department} onChange={handleChange}
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500">
          <option>Engineering</option><option>Design</option><option>Human Resources</option>
          <option>Marketing</option><option>Finance</option>
        </select>
        <input name="salary" type="number" min="0" value={form.salary} onChange={handleChange} placeholder="Salary"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 sm:col-span-2" />
      </div>

      <div className="mt-5 flex gap-3">
        <button type="submit" className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
          {editingEmployee ? "Update Employee" : "Add Employee"}
        </button>
        {editingEmployee && (
          <button type="button" onClick={onCancel} className="rounded-xl bg-slate-100 px-5 py-3 font-semibold text-slate-700">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default EmployeeForm;