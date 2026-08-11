import { useMemo, useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import EmployeeForm from "../components/EmployeeForm";
import SearchFilter from "../components/SearchFilter";
import Stats from "../components/Stats";
import useLocalStorage from "../hooks/useLocalStorage";
import { initialEmployees } from "../data/initialEmployees";

function EmployeeManagement() {
  const [employees, setEmployees] = useLocalStorage("employees", initialEmployees);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [editingEmployee, setEditingEmployee] = useState(null);

  const filteredEmployees = useMemo(() => {
    const term = search.trim().toLowerCase();

    return employees.filter((employee) => {
      const matchesSearch = employee.name.toLowerCase().includes(term);
      const matchesDepartment =
        department === "All" || employee.department === department;
      return matchesSearch && matchesDepartment;
    });
  }, [employees, search, department]);

  const handleSaveEmployee = (employeeData) => {
    if (editingEmployee) {
      setEmployees((current) =>
        current.map((employee) =>
          employee.id === editingEmployee.id
            ? { ...employee, ...employeeData }
            : employee
        )
      );
      setEditingEmployee(null);
      return;
    }

    setEmployees((current) => [
      { id: Date.now(), ...employeeData },
      ...current
    ]);
  };

  const handleDeleteEmployee = (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;
    setEmployees((current) => current.filter((employee) => employee.id !== id));
    if (editingEmployee?.id === id) setEditingEmployee(null);
  };

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Week 3 • Day 5
          </p>
          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            Employee Management System
          </h1>
          <p className="mt-2 text-slate-500">
            Add, edit, delete, search and filter employees.
          </p>
        </header>

        <div className="space-y-6">
          <Stats total={employees.length} visible={filteredEmployees.length} />

          <EmployeeForm
            editingEmployee={editingEmployee}
            onSave={handleSaveEmployee}
            onCancel={() => setEditingEmployee(null)}
          />

          <SearchFilter
            search={search}
            setSearch={setSearch}
            department={department}
            setDepartment={setDepartment}
          />

          {filteredEmployees.length === 0 ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
              <h2 className="text-xl font-bold">No employees found</h2>
              <p className="mt-2 text-slate-500">Try another search or filter.</p>
            </div>
          ) : (
            <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredEmployees.map((employee) => (
                <EmployeeCard
                  key={employee.id}
                  employee={employee}
                  onEdit={setEditingEmployee}
                  onDelete={handleDeleteEmployee}
                />
              ))}
            </section>
          )}
        </div>
      </div>
    </main>
  );
}

export default EmployeeManagement;