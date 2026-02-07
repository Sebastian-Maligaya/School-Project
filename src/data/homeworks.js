// Homework data store
// Each homework: { id, teacherId, teacherName, subject, strand, section, title, description, deadline, createdAt }
// section = target section (e.g. "STEM-A") — only students in that section see it

let homeworks = [
  {
    id: 1,
    teacherId: 2,
    teacherName: "Mr. Juan Dela Cruz",
    subject: "General Mathematics",
    strand: "STEM",
    section: "STEM-A",
    title: "Algebra Worksheet Ch.5",
    description: "Complete exercises 1-20 on page 112. Show all solutions.",
    deadline: "2026-02-15T23:59:00",
    createdAt: "2026-02-05T08:00:00",
  },
  {
    id: 2,
    teacherId: 2,
    teacherName: "Mr. Juan Dela Cruz",
    subject: "General Physics",
    strand: "STEM",
    section: "STEM-B",
    title: "Newton's Laws Problem Set",
    description: "Answer problems 1-15 on Newton's three laws of motion.",
    deadline: "2026-02-18T23:59:00",
    createdAt: "2026-02-05T10:00:00",
  },
  {
    id: 3,
    teacherId: 3,
    teacherName: "Ms. Maria Santos",
    subject: "Web Development",
    strand: "ICT",
    section: "ICT-A",
    title: "Build a Landing Page",
    description: "Create a responsive landing page using HTML, CSS, and JavaScript.",
    deadline: "2026-02-20T23:59:00",
    createdAt: "2026-02-06T09:00:00",
  },
  {
    id: 4,
    teacherId: 4,
    teacherName: "Mr. Pedro Reyes",
    subject: "Business Finance",
    strand: "ABM",
    section: "ABM-A",
    title: "Financial Statements Analysis",
    description: "Analyze the provided financial statements and write a summary report.",
    deadline: "2026-02-22T23:59:00",
    createdAt: "2026-02-06T14:00:00",
  },
];

let nextHomeworkId = 5;

export function getHomeworks() {
  return homeworks;
}

// Get active homeworks for a specific section (filters out expired)
export function getHomeworksBySection(section) {
  const now = new Date();
  return homeworks.filter(
    (hw) => hw.section === section && new Date(hw.deadline) >= now
  );
}

// Group active homeworks for a section by subject
export function getHomeworksBySectionAndSubject(section, subject) {
  const now = new Date();
  return homeworks.filter(
    (hw) =>
      hw.section === section &&
      hw.subject === subject &&
      new Date(hw.deadline) >= now
  );
}

export function getHomeworksByTeacher(teacherId) {
  return homeworks.filter((hw) => hw.teacherId === teacherId);
}

export function getActiveHomeworks() {
  const now = new Date();
  return homeworks.filter((hw) => new Date(hw.deadline) >= now);
}

// Get active homeworks visible to a specific student section
export function getActiveHomeworksForSection(section) {
  const now = new Date();
  return homeworks.filter(
    (hw) => hw.section === section && new Date(hw.deadline) >= now
  );
}

export function addHomework(homework) {
  const newHomework = {
    ...homework,
    id: nextHomeworkId++,
    createdAt: new Date().toISOString(),
  };
  homeworks = [...homeworks, newHomework];
  return newHomework;
}

export function deleteHomework(id) {
  homeworks = homeworks.filter((hw) => hw.id !== id);
}
