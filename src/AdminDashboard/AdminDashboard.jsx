import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  getAccounts,
  addAccount,
  deleteAccount,
  getTeachers,
  getStudents,
  SECTIONS,
} from "../data/accounts";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState("teachers");
  const [showForm, setShowForm] = useState(false);
  const [refresh, setRefresh] = useState(0);

  // Form state
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [formRole, setFormRole] = useState("student");
  const [formSections, setFormSections] = useState([]);
  const [formSection, setFormSection] = useState("");

  if (!user || user.role !== "admin") {
    return (
      <div className="admin-denied">
        <h2>Access Denied</h2>
        <p>You must be an admin to view this page.</p>
        <button onClick={() => navigate("/sign")}>Go to Login</button>
      </div>
    );
  }

  const teachers = getTeachers();
  const students = getStudents();

  function handleCreate(e) {
    e.preventDefault();
    const newAccount = {
      name: formName,
      email: formEmail,
      password: formPassword,
      role: formRole,
    };
    if (formRole === "teacher") {
      newAccount.sections = formSections;
    }
    if (formRole === "student") {
      newAccount.section = formSection;
    }
    addAccount(newAccount);
    resetForm();
    setRefresh((r) => r + 1);
  }

  function handleDelete(id) {
    deleteAccount(id);
    setRefresh((r) => r + 1);
  }

  function resetForm() {
    setFormName("");
    setFormEmail("");
    setFormPassword("");
    setFormRole("student");
    setFormSections([]);
    setFormSection("");
    setShowForm(false);
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Manage teachers and students accounts</p>
      </div>

      <div className="admin-tabs">
        <button
          className={tab === "teachers" ? "active" : ""}
          onClick={() => setTab("teachers")}
        >
          Teachers ({teachers.length})
        </button>
        <button
          className={tab === "students" ? "active" : ""}
          onClick={() => setTab("students")}
        >
          Students ({students.length})
        </button>
        <button className="create-btn" onClick={() => setShowForm(!showForm)}>
          + Create Account
        </button>
      </div>

      {showForm && (
        <div className="admin-form-wrapper">
          <form className="admin-form" onSubmit={handleCreate}>
            <h3>Create New Account</h3>
            <div className="form-row">
              <label>Role</label>
              <select
                value={formRole}
                onChange={(e) => setFormRole(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
            <div className="form-row">
              <label>Full Name</label>
              <input
                type="text"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                required
                placeholder="e.g. Juan Dela Cruz"
              />
            </div>
            <div className="form-row">
              <label>Email</label>
              <input
                type="email"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                required
                placeholder="e.g. juan@srcc.edu"
              />
            </div>
            <div className="form-row">
              <label>Password</label>
              <input
                type="text"
                value={formPassword}
                onChange={(e) => setFormPassword(e.target.value)}
                required
                placeholder="Enter password"
              />
            </div>
            {formRole === "teacher" && (
              <div className="form-row">
                <label>Assigned Sections</label>
                <div className="checkbox-group">
                  {SECTIONS.map((sec) => (
                    <label key={sec} className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formSections.includes(sec)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormSections([...formSections, sec]);
                          } else {
                            setFormSections(formSections.filter((s) => s !== sec));
                          }
                        }}
                      />
                      {sec}
                    </label>
                  ))}
                </div>
              </div>
            )}
            {formRole === "student" && (
              <div className="form-row">
                <label>Section</label>
                <select
                  value={formSection}
                  onChange={(e) => setFormSection(e.target.value)}
                  required
                >
                  <option value="">-- Select Section --</option>
                  {SECTIONS.map((sec) => (
                    <option key={sec} value={sec}>{sec}</option>
                  ))}
                </select>
              </div>
            )}
            <div className="form-actions">
              <button type="submit">Create</button>
              <button type="button" onClick={resetForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="admin-table-wrapper">
        {tab === "teachers" && (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Assigned Sections</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((t) => (
                <tr key={t.id}>
                  <td>{t.name}</td>
                  <td>{t.email}</td>
                  <td>{t.sections?.join(", ")}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(t.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {teachers.length === 0 && (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center" }}>
                    No teachers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}

        {tab === "students" && (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Section</th>
                <th>Strand</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => {
                const strand = s.section ? s.section.split("-")[0] : "—";
                return (
                <tr key={s.id}>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.section}</td>
                  <td>{strand}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(s.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                );
              })}
              {students.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>
                    No students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
