// Hardcoded accounts for the school website showcase
// Roles: "admin", "teacher", "student"
// Strands: STEM, ICT, ABM
// Sections: e.g. STEM-A, STEM-B, ICT-A, ICT-B, ABM-A, ABM-B

// Strand → subjects mapping
export const STRANDS = {
  STEM: ["General Mathematics", "Pre-Calculus", "General Biology", "General Physics", "General Chemistry", "Earth Science"],
  ICT: ["Computer Programming", "Web Development", "Database Management", "Digital Arts", "Computer Systems"],
  ABM: ["Business Mathematics", "Fundamentals of ABM", "Business Finance", "Organization & Management", "Applied Economics"],
};

// All available sections
export const SECTIONS = ["STEM-A", "STEM-B", "ICT-A", "ICT-B", "ABM-A", "ABM-B"];

// Helper: get strand from section name (e.g. "STEM-A" → "STEM")
export function getStrandFromSection(section) {
  if (!section) return null;
  return section.split("-")[0];
}

// Helper: get subjects for a section based on its strand
export function getSubjectsForSection(section) {
  const strand = getStrandFromSection(section);
  return STRANDS[strand] || [];
}

let accounts = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@srcc.edu",
    password: "admin123",
    role: "admin",
  },
  {
    id: 2,
    name: "Mr. Juan Dela Cruz",
    email: "juan@srcc.edu",
    password: "teacher123",
    role: "teacher",
    sections: ["STEM-A", "STEM-B"],
  },
  {
    id: 3,
    name: "Ms. Maria Santos",
    email: "maria@srcc.edu",
    password: "teacher123",
    role: "teacher",
    sections: ["ICT-A", "ICT-B"],
  },
  {
    id: 4,
    name: "Mr. Pedro Reyes",
    email: "pedro@srcc.edu",
    password: "teacher123",
    role: "teacher",
    sections: ["ABM-A", "ABM-B"],
  },
  {
    id: 5,
    name: "Anna Garcia",
    email: "anna@srcc.edu",
    password: "student123",
    role: "student",
    section: "STEM-A",
  },
  {
    id: 6,
    name: "Carlos Rivera",
    email: "carlos@srcc.edu",
    password: "student123",
    role: "student",
    section: "STEM-A",
  },
  {
    id: 7,
    name: "Bea Lim",
    email: "bea@srcc.edu",
    password: "student123",
    role: "student",
    section: "ICT-A",
  },
  {
    id: 8,
    name: "Miguel Torres",
    email: "miguel@srcc.edu",
    password: "student123",
    role: "student",
    section: "ABM-A",
  },
  {
    id: 9,
    name:"Misael Gaddi",
    email: "gaddi@srcc.edu",
    password: "gaddi123",
    role: "student",
    section: "ICT-B",
  },
];

let nextId = 9;

export function getAccounts() {
  return accounts;
}

export function addAccount(account) {
  const newAccount = { ...account, id: nextId++ };
  accounts = [...accounts, newAccount];
  return newAccount;
}

export function deleteAccount(id) {
  accounts = accounts.filter((a) => a.id !== id);
}

export function findAccountByEmail(email) {
  return accounts.find((a) => a.email === email);
}

export function getTeachers() {
  return accounts.filter((a) => a.role === "teacher");
}

export function getStudents() {
  return accounts.filter((a) => a.role === "student");
}
