import React from "react";
import { useParams } from "react-router-dom";
import "./OurSchoolPage.css";

const sections = {
  history: {
    title: "History",
    body: "This section is reserved for the school history content. You can replace this text with your full historical background.",
  },
  "mission-vision": {
    title: "Mission and Vision",
    body: "This section is reserved for your official mission and vision statements.",
  },
  "deped-philosophy": {
    title: "DepEd Philosophy",
    body: "This section is reserved for your DepEd philosophy content.",
  },
  "student-handbook": {
    title: "Student Handbook",
    body: "This section is reserved for student handbook details and policies.",
  },
  "office-school-head": {
    title: "Office of the School Head",
    body: "This section is reserved for information from the office of the school head.",
  },
};

export default function OurSchoolPage() {
  const { section } = useParams();
  const current = sections[section] || sections.history;

  return (
    <main className="our-school-page">
      <section className="our-school-card">
        <h1>{current.title}</h1>
        <p>{current.body}</p>
      </section>
    </main>
  );
}
