import { Pencil, Trash2, Mail, Building2 } from "lucide-react";

function EmployeeCard({ employee, onEdit, onDelete }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{employee.name}</h3>
          <p className="mt-1 text-sm font-medium text-blue-600">{employee.role}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => onEdit(employee)} className="rounded-lg p-2 text-slate-500 hover:bg-blue-50 hover:text-blue-600" title="Edit">
            <Pencil size={17} />
          </button>
          <button onClick={() => onDelete(employee.id)} className="rounded-lg p-2 text-slate-500 hover:bg-red-50 hover:text-red-600" title="Delete">
            <Trash2 size={17} />
          </button>
        </div>
      </div>

      <div className="space-y-3 text-sm text-slate-600">
        <p className="flex items-center gap-2"><Mail size={16} />{employee.email}</p>
        <p className="flex items-center gap-2"><Building2 size={16} />{employee.department}</p>
      </div>

      <div className="mt-5 border-t border-slate-100 pt-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">Salary</span>
        <p className="mt-1 text-lg font-bold text-slate-900">
          Rs. {Number(employee.salary).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default EmployeeCard;