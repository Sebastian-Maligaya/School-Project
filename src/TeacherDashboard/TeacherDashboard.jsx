import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  getHomeworksByTeacher,
  addHomework,
  deleteHomework,
} from "../data/homeworks";
import { STRANDS, SECTIONS, getStrandFromSection } from "../data/accounts";
import "./TeacherDashboard.css";

export default function TeacherDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [refresh, setRefresh] = useState(0);

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  if (!user || user.role !== "teacher") {
    return (
      <div className="teacher-denied">
        <h2>Access Denied</h2>
        <p>You must be a teacher to view this page.</p>
        <button onClick={() => navigate("/sign")}>Go to Login</button>
      </div>
    );
  }

  // Teacher's assigned sections
  const teacherSections = user.sections || [];

  // When a section is selected, derive its strand and available subjects
  const selectedStrand = getStrandFromSection(selectedSection);
  const availableSubjects = selectedStrand ? STRANDS[selectedStrand] || [] : [];

  const myHomeworks = getHomeworksByTeacher(user.id);
  const now = new Date();

  function handlePost(e) {
    e.preventDefault();
    addHomework({
      teacherId: user.id,
      teacherName: user.name,
      subject: selectedSubject,
      strand: selectedStrand,
      section: selectedSection,
      title,
      description,
      deadline: new Date(deadline).toISOString(),
    });
    setTitle("");
    setDescription("");
    setDeadline("");
    setSelectedSection("");
    setSelectedSubject("");
    setShowForm(false);
    setRefresh((r) => r + 1);
  }

  function handleDelete(id) {
    deleteHomework(id);
    setRefresh((r) => r + 1);
  }

  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div className="teacher-dashboard">
      <div className="teacher-header">
        <div>
          <h1>Teacher Dashboard</h1>
          <p>
            Sections: <strong>{teacherSections.join(", ") || "None assigned"}</strong>
          </p>
        </div>
        <button className="post-btn" onClick={() => setShowForm(!showForm)}>
          + Post Homework
        </button>
      </div>

      {showForm && (
        <form className="hw-form" onSubmit={handlePost}>
          <h3>Post New Homework</h3>
          <div className="form-row">
            <label>Target Section</label>
            <select
              value={selectedSection}
              onChange={(e) => {
                setSelectedSection(e.target.value);
                setSelectedSubject("");
              }}
              required
            >
              <option value="">-- Select Section --</option>
              {teacherSections.map((sec) => (
                <option key={sec} value={sec}>{sec}</option>
              ))}
            </select>
          </div>
          {selectedSection && (
            <div className="form-row">
              <label>Subject ({selectedStrand} strand)</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                required
              >
                <option value="">-- Select Subject --</option>
                {availableSubjects.map((sub) => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
          )}
          <div className="form-row">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="e.g. Chapter 5 Exercises"
            />
          </div>
          <div className="form-row">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Describe the homework assignment..."
              rows={3}
            />
          </div>
          <div className="form-row">
            <label>Deadline</label>
            <input
              type="datetime-local"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit">Post</button>
            <button type="button" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="hw-list">
        <h2>Your Homework Posts</h2>
        {myHomeworks.length === 0 ? (
          <p className="empty">No homework posted yet.</p>
        ) : (
          myHomeworks.map((hw) => {
            const isExpired = new Date(hw.deadline) < now;
            return (
              <div
                key={hw.id}
                className={`hw-card ${isExpired ? "expired" : ""}`}
              >
                <div className="hw-card-header">
                  <h3>{hw.title}</h3>
                  {isExpired && <span className="expired-badge">Expired</span>}
                </div>
                <div className="hw-tags">
                  <span className="hw-tag section-tag">{hw.section}</span>
                  <span className="hw-tag strand-tag">{hw.strand}</span>
                  <span className="hw-tag subject-tag">{hw.subject}</span>
                </div>
                <p className="hw-desc">{hw.description}</p>
                <div className="hw-meta">
                  <span>Deadline: {formatDate(hw.deadline)}</span>
                  <span>Posted: {formatDate(hw.createdAt)}</span>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(hw.id)}
                >
                  Delete
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
