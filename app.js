// College Subject Scheduler - Application Logic and Dataset

// 1. Core Dataset (Transcribed from the provided images)
const COURSES = [
  {
    code: "ISWE402L",
    name: "Software Metrics",
    category: "DC - Discipline Core",
    credits: 3,
    type: "Theory Only",
    options: [
      { slot: "B2+TB2", faculty: "KRITHIKA L.B", type: "TH" },
      { slot: "B2+TB2", faculty: "CHEMMALAR SELVI G", type: "TH" },
      { slot: "B1+TB1", faculty: "JEEVITHA P", type: "TH" },
      { slot: "B1+TB1", faculty: "NIVETHITHA K", type: "TH" },
      { slot: "B2+TB2", faculty: "SUMATHI D", type: "TH" },
      { slot: "B2+TB2", faculty: "NEELU KHARE", type: "TH" },
      { slot: "B2+TB2", faculty: "RAHAMATHUNNISA U", type: "TH" },
      { slot: "B1+TB1", faculty: "SENTHIL KUMARAN U", type: "TH" },
      { slot: "B1+TB1", faculty: "KARPAGAM S", type: "TH" },
      { slot: "B1+TB1", faculty: "RAMALINGAM M", type: "TH" }
    ]
  },
  {
    code: "ISWE404L",
    name: "Design Patterns",
    category: "DC - Discipline Core",
    credits: 3,
    type: "Theory Only",
    options: [
      { slot: "C1+TC1", faculty: "SENTHIL KUMAR. M", type: "TH" },
      { slot: "C2+TC2", faculty: "KANCHAN KEISHAM", type: "TH" },
      { slot: "C1+TC1", faculty: "JERART JULUS L", type: "TH" },
      { slot: "C2+TC2", faculty: "BALA GANESH N", type: "TH" },
      { slot: "C2+TC2", faculty: "SENTHIL KUMARAN U", type: "TH" },
      { slot: "C1+TC1", faculty: "MUTHAMIL SELVAN T", type: "TH" },
      { slot: "C2+TC2", faculty: "SENTHIL KUMAR. M", type: "TH" },
      { slot: "C1+TC1", faculty: "MOHANRAJ G", type: "TH" },
      { slot: "C2+TC2", faculty: "CHANDRASEGAR.T", type: "TH" },
      { slot: "C1+TC1", faculty: "SENTHIL KUMARAN U", type: "TH" }
    ]
  },
  {
    code: "ISWE310L",
    name: "Natural Language Processing",
    category: "DE - Discipline Elective",
    credits: 3,
    type: "Theory Only",
    options: [
      { slot: "E1+TE1", faculty: "SUBA SHANTHINI S", type: "TH" },
      { slot: "E2+TE2", faculty: "AASEEGHA M D", type: "TH" },
      { slot: "E1+TE1", faculty: "SIVARANJINI N", type: "TH" },
      { slot: "E2+TE2", faculty: "SUGANYA D", type: "TH" },
      { slot: "E2+TE2", faculty: "SUREKA S", type: "TH" }
    ]
  },
  {
    code: "ISWE407L",
    name: "User Interface and User Experience Design",
    category: "DC - Discipline Core",
    credits: 3,
    type: "Theory Only",
    options: [
      { slot: "A2+TA2", faculty: "CHARANYA R", type: "TH" },
      { slot: "A2+TA2", faculty: "RAJESWARI C", type: "TH" },
      { slot: "A1+TA1", faculty: "JEEVITHA P", type: "TH" },
      { slot: "A1+TA1", faculty: "KALAIVANI S", type: "TH" },
      { slot: "A1+TA1", faculty: "RAJESWARI C", type: "TH" },
      { slot: "A1+TA1", faculty: "SANTHOSH KUMAR S V N", type: "TH" },
      { slot: "A1+TA1", faculty: "CHARANYA R", type: "TH" },
      { slot: "A2+TA2", faculty: "JEEVITHA P", type: "TH" },
      { slot: "A2+TA2", faculty: "KALAIVANI S", type: "TH" },
      { slot: "A2+TA2", faculty: "SANTHOSH KUMAR S V N", type: "TH" }
    ]
  },
  {
    code: "ISWE407P",
    name: "User Interface and User Experience Design Lab",
    category: "DC - Discipline Core",
    credits: 1,
    type: "Lab Only",
    options: [
      { slot: "L37+L38", faculty: "CHARANYA R", type: "LO" },
      { slot: "L11+L12", faculty: "CHARANYA R", type: "LO" },
      { slot: "L15+L16", faculty: "JEEVITHA P", type: "LO" },
      { slot: "L39+L40", faculty: "KALAIVANI S", type: "LO" },
      { slot: "L21+L22", faculty: "KALAIVANI S", type: "LO" },
      { slot: "L49+L50", faculty: "RAJESWARI C", type: "LO" },
      { slot: "L23+L24", faculty: "RAJESWARI C", type: "LO" },
      { slot: "L55+L56", faculty: "JEEVITHA P", type: "LO" },
      { slot: "L47+L48", faculty: "SANTHOSH KUMAR S V N", type: "LO" },
      { slot: "L29+L30", faculty: "SANTHOSH KUMAR S V N", type: "LO" }
    ]
  },
  {
    code: "ISWE311L",
    name: "Software Industrialization and Economics",
    category: "DE - Discipline Elective",
    credits: 3,
    type: "Theory Only",
    options: [
      { slot: "G1+TG1", faculty: "VIJAY ANAND R", type: "TH" },
      { slot: "G2+TG2", faculty: "SENTHIL KUMAR P", type: "TH" },
      { slot: "G1+TG1", faculty: "SRINIVASAN P", type: "TH" },
      { slot: "G2+TG2", faculty: "BALAJI E", type: "TH" },
      { slot: "G2+TG2", faculty: "SRINIVASAN P", type: "TH" }
    ]
  },
  {
    code: "ISWE410L",
    name: "Machine Learning",
    category: "DE - Discipline Elective",
    credits: 3,
    type: "Theory Only",
    options: [
      { slot: "D1", faculty: "USHAPREETHI P", type: "TH" },
      { slot: "D2", faculty: "PORKODI S", type: "TH" },
      { slot: "D2", faculty: "SRINIVASAN P", type: "TH" },
      { slot: "D2", faculty: "USHAPREETHI P", type: "TH" },
      { slot: "D1", faculty: "PORKODI S", type: "TH" }
    ]
  },
  {
    code: "ISWE410P",
    name: "Machine Learning Lab",
    category: "DE - Discipline Elective",
    credits: 1,
    type: "Lab Only",
    options: [
      { slot: "L53+L54", faculty: "USHAPREETHI P", type: "LO" },
      { slot: "L5+L6", faculty: "USHAPREETHI P", type: "LO" },
      { slot: "L51+L52", faculty: "PORKODI S", type: "LO" },
      { slot: "L27+L28", faculty: "SRINIVASAN P", type: "LO" },
      { slot: "L9+L10", faculty: "PORKODI S", type: "LO" }
    ]
  },
  {
    code: "ISWE411L",
    name: "Deep Learning",
    category: "DE - Discipline Elective",
    credits: 3,
    type: "Theory Only",
    options: [
      { slot: "F2+TF2", faculty: "NEELU KHARE", type: "TH" },
      { slot: "F1+TF1", faculty: "GANESAN K", type: "TH" },
      { slot: "F1+TF1", faculty: "BHARANI DHARAN N", type: "TH" },
      { slot: "F2+TF2", faculty: "SRIVATHSAVA M", type: "TH" },
      { slot: "F1+TF1", faculty: "NEELU KHARE", type: "TH" }
    ]
  },
  {
    code: "ISWE412L",
    name: "Block Chain Technologies",
    category: "DE - Discipline Elective",
    credits: 3,
    type: "Theory Only",
    options: [
      { slot: "B1+TB1", faculty: "VIJAY ANAND R", type: "TH" },
      { slot: "B2+TB2", faculty: "VIJAY ANAND R", type: "TH" },
      { slot: "B2+TB2", faculty: "PRIYA PONNUSWAMY P", type: "TH" },
      { slot: "B1+TB1", faculty: "SUGANYA A", type: "TH" }
    ]
  },
  {
    code: "ISWE416L",
    name: "Big Data Analytics",
    category: "DE - Discipline Elective",
    credits: 3,
    type: "Theory Only",
    options: [
      { slot: "B2+TB2", faculty: "SENTHIL KUMAR. M", type: "TH" },
      { slot: "B2+TB2", faculty: "CHANDRA MOULISWARAN S", type: "TH" },
      { slot: "B1+TB1", faculty: "RAJESH P", type: "TH" },
      { slot: "B1+TB1", faculty: "CHANDRA MOULISWARAN S", type: "TH" }
    ]
  },
  {
    code: "ISWE415L",
    name: "Cyber Security",
    category: "DE - Discipline Elective",
    credits: 3,
    type: "Theory Only",
    options: [
      { slot: "D1+TD1", faculty: "JEYANTHI N", type: "TH" },
      { slot: "D1+TD1", faculty: "MALATHY E", type: "TH" },
      { slot: "D2+TD2", faculty: "NADESH R.K", type: "TH" },
      { slot: "D1+TD1", faculty: "PRABHU J", type: "TH" },
      { slot: "D2+TD2", faculty: "MANGAYARKARASI R", type: "TH" }
    ]
  },
  {
    code: "ISTS301P",
    name: "Advanced Competitive Coding - I",
    category: "OE - Open Elective",
    credits: 2,
    type: "Soft Skills",
    options: [
      { slot: "G2+TG2", faculty: "FACE (APT)", type: "SS" },
      { slot: "G2+TG2", faculty: "ETHNUS (APT)", type: "SS" },
      { slot: "G1+TG1", faculty: "FACE (APT)", type: "SS" },
      { slot: "G2+TG2", faculty: "FACE (APT)", type: "SS" },
      { slot: "G1+TG1", faculty: "ETHNUS (APT)", type: "SS" },
      { slot: "G1+TG1", faculty: "FACE (APT)", type: "SS" },
      { slot: "G2+TG2", faculty: "FACE (APT)", type: "SS" },
      { slot: "G2+TG2", faculty: "ETHNUS (APT)", type: "SS" },
      { slot: "G1+TG1", faculty: "ETHNUS (APT)", type: "SS" },
      { slot: "G1+TG1", faculty: "FACE (APT)", type: "SS" }
    ]
  }
];

// 2. High-fidelity Slot to Timetable Grid mapping
// Rows: 0 = Mon, 1 = Tue, 2 = Wed, 3 = Thu, 4 = Fri
// Cols:
// 0: 8:00 - 8:50 AM (Lab Period 1)
// 1: 9:00 - 9:50 AM (Lab Period 2)
// 2: 10:00 - 10:50 AM (Lab Period 3)
// 3: 11:00 - 11:50 AM (Lab Period 4)
// 4: 12:00 - 12:50 PM (Lab Period 5)
// 5: 12:31 - 1:20 PM (Lab Period 6 - Lab only)
// LUNCH BREAK is a visual separator cell, skipped in JS column indices.
// 6: 2:00 - 2:50 PM (Lab Period 7)
// 7: 3:00 - 3:50 PM (Lab Period 8)
// 8: 4:00 - 4:50 PM (Lab Period 9)
// 9: 5:00 - 5:50 PM (Lab Period 10)
// 10: 6:00 - 6:50 PM (Lab Period 11)
// 11: 6:31 - 7:20 PM (Lab Period 12 - Lab only)
// 12: 7:01 - 7:50 PM (Theory Period 13 - Theory only)

const SLOT_MAP = {
  // Morning Theory Slots
  "A1": [ { day: 0, col: 0 }, { day: 2, col: 1 } ],
  "B1": [ { day: 1, col: 0 }, { day: 3, col: 1 } ],
  "C1": [ { day: 2, col: 0 }, { day: 4, col: 1 } ],
  "D1": [ { day: 3, col: 0 }, { day: 0, col: 2 } ],
  "E1": [ { day: 4, col: 0 }, { day: 1, col: 2 } ],
  "F1": [ { day: 0, col: 1 }, { day: 2, col: 2 } ],
  "G1": [ { day: 1, col: 1 }, { day: 3, col: 2 } ],

  // Morning Tutorials & Special Slots
  "TA1": [ { day: 4, col: 2 } ],
  "TB1": [ { day: 0, col: 3 } ],
  "TC1": [ { day: 1, col: 3 } ],
  "TD1": [ { day: 4, col: 4 } ],
  "TE1": [ { day: 3, col: 3 } ],
  "TF1": [ { day: 4, col: 3 } ],
  "TG1": [ { day: 0, col: 4 } ],
  "TAA1": [ { day: 1, col: 4 } ],
  "V1": [ { day: 2, col: 3 } ],
  "V2": [ { day: 2, col: 4 } ],
  "TCC1": [ { day: 3, col: 4 } ],

  // Afternoon Theory Slots
  "A2": [ { day: 0, col: 6 }, { day: 2, col: 7 } ],
  "B2": [ { day: 1, col: 6 }, { day: 3, col: 7 } ],
  "C2": [ { day: 2, col: 6 }, { day: 4, col: 7 } ],
  "D2": [ { day: 3, col: 6 }, { day: 0, col: 8 } ],
  "E2": [ { day: 4, col: 6 }, { day: 1, col: 8 } ],
  "F2": [ { day: 0, col: 7 }, { day: 2, col: 8 } ],
  "G2": [ { day: 1, col: 7 }, { day: 3, col: 8 } ],

  // Afternoon Tutorials & Special Slots
  "TA2": [ { day: 4, col: 8 } ],
  "TB2": [ { day: 0, col: 9 } ],
  "TC2": [ { day: 1, col: 9 } ],
  "TD2": [ { day: 2, col: 9 } ],
  "TE2": [ { day: 3, col: 9 } ],
  "TF2": [ { day: 4, col: 9 } ],
  "TG2": [ { day: 0, col: 10 } ],
  "TAA2": [ { day: 1, col: 10 } ],
  "TBB2": [ { day: 2, col: 10 } ],
  "TCC2": [ { day: 3, col: 10 } ],
  "TDD2": [ { day: 4, col: 10 } ],

  // Late Evening Theory Slots (7:01 PM - 7:50 PM)
  "V3": [ { day: 0, col: 12 } ],
  "V4": [ { day: 1, col: 12 } ],
  "V5": [ { day: 2, col: 12 } ],
  "V6": [ { day: 3, col: 12 } ],
  "V7": [ { day: 4, col: 12 } ]
};

// Programmatically populate lab slots L1 to L60
// L1 to L30 cover morning periods 0 to 5
for (let k = 1; k <= 30; k++) {
  const day = Math.floor((k - 1) / 6);
  const col = (k - 1) % 6;
  SLOT_MAP[`L${k}`] = [ { day, col } ];
}
// L31 to L60 cover afternoon periods 6 to 11
for (let k = 31; k <= 60; k++) {
  const day = Math.floor((k - 31) / 6);
  const col = 6 + ((k - 31) % 6);
  SLOT_MAP[`L${k}`] = [ { day, col } ];
}

// 3. Application State
let selectedClasses = []; // Array of { courseCode, slot, faculty, type, color }
let currentCategoryFilter = "All";
let searchQuery = "";
let activeSlotFilter = null; // { slots: Array, label: String }

// Course Colors (harmonic slate/pastel tones)
const COURSE_COLORS = [
  "#6366f1", // Indigo
  "#ec4899", // Pink
  "#8b5cf6", // Violet
  "#10b981", // Emerald
  "#f59e0b", // Amber
  "#06b6d4", // Cyan
  "#ef4444", // Red
  "#84cc16", // Lime
  "#a855f7", // Purple
  "#3b82f6", // Blue
  "#14b8a6", // Teal
  "#f43f5e", // Rose
  "#eab308", // Yellow
  "#64748b"  // Slate
];

// Helper to assign colors to courses
function getCourseColor(courseCode) {
  let hash = 0;
  for (let i = 0; i < courseCode.length; i++) {
    hash = courseCode.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % COURSE_COLORS.length;
  return COURSE_COLORS[index];
}

// Helper to determine if a slot is morning or afternoon
function isMorningSlot(slotName) {
  const labMatch = slotName.match(/^L(\d+)/);
  if (labMatch) {
    const num = parseInt(labMatch[1]);
    return num <= 30;
  }
  const parts = slotName.split("+");
  const firstPart = parts[0].trim();
  if (firstPart.endsWith("1") || firstPart === "TA1" || firstPart === "TAA1" || firstPart === "V1" || firstPart === "V2" || firstPart === "TCC1") {
    return true;
  }
  return false;
}

// Helper to find other subjects sharing the same slot
function getCoOccurringCourses(slotName, currentCourseCode) {
  const matchingCourses = [];
  COURSES.forEach(course => {
    if (course.code === currentCourseCode) return;
    const hasSameSlot = course.options.some(opt => {
      const optCoords = getCoordinatesForSlot(opt.slot);
      const currentCoords = getCoordinatesForSlot(slotName);
      return optCoords.some(oc => currentCoords.some(cc => oc.day === cc.day && oc.col === cc.col));
    });
    if (hasSameSlot) {
      matchingCourses.push(course.code);
    }
  });
  return matchingCourses;
}

// Translate slot representation (like "A1+TA1") to grid coordinates
function getCoordinatesForSlot(slotName) {
  const parts = slotName.split("+");
  let coords = [];
  parts.forEach(part => {
    const trimmed = part.trim();
    if (SLOT_MAP[trimmed]) {
      coords = coords.concat(SLOT_MAP[trimmed]);
    }
  });
  return coords;
}

// 4. Clash Detection Logic
// Returns { clashed: boolean, reason: string }
function checkSlotClash(newCourseCode, slotName, facultyName) {
  const newCoords = getCoordinatesForSlot(slotName);
  
  // Check if this subject already has a registered section.
  // For 1 subject, only 1 option (faculty & slot combination) can be selected (morning or afternoon).
  const existingSameCourse = selectedClasses.find(c => c.courseCode === newCourseCode);

  if (existingSameCourse) {
    return {
      clashed: true,
      reason: `You have already selected a section for ${newCourseCode} (${existingSameCourse.faculty} - Slot ${existingSameCourse.slot}). Only one option is allowed per subject. Please remove it first.`
    };
  }

  // Check for day-hour coordinate overlaps
  for (const newCoord of newCoords) {
    for (const selected of selectedClasses) {
      const selectedCoords = getCoordinatesForSlot(selected.slot);
      for (const selCoord of selectedCoords) {
        if (newCoord.day === selCoord.day && newCoord.col === selCoord.col) {
          const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
          const timeStrings = [
            "8:00 - 8:50 AM", "9:00 - 9:50 AM", "10:00 - 10:50 AM", "11:00 - 11:50 AM", "12:00 - 12:50 PM",
            "12:31 - 1:20 PM", "2:00 - 2:50 PM", "3:00 - 3:50 PM", "4:00 - 4:50 PM", "5:00 - 5:50 PM",
            "6:00 - 6:50 PM", "6:31 - 7:20 PM", "7:01 - 7:50 PM"
          ];
          return {
            clashed: true,
            reason: `Slot clash on ${dayNames[newCoord.day]} at ${timeStrings[newCoord.col]} with ${selected.courseCode} (${selected.faculty} - Slot ${selected.slot}).`
          };
        }
      }
    }
  }

  return { clashed: false };
}

// 5. Actions
function addClass(courseCode, slot, faculty, type, skipPairing = false) {
  const clash = checkSlotClash(courseCode, slot, faculty);
  if (clash.clashed) {
    showNotification(clash.reason, "error");
    return false;
  }

  const course = COURSES.find(c => c.code === courseCode);
  const color = getCourseColor(courseCode);

  selectedClasses.push({
    courseCode,
    courseName: course.name,
    slot,
    faculty,
    type,
    color,
    credits: course.credits
  });

  saveToLocalStorage();
  renderAll();
  showNotification(`Successfully added ${courseCode} (${faculty})`, "success");

  // Automatic pairing logic for opposite session of the same faculty
  if (!skipPairing) {
    const autoPairToggle = document.getElementById("auto-pair-toggle");
    const isAutoPairEnabled = autoPairToggle ? autoPairToggle.checked : true;
    if (isAutoPairEnabled) {
      handleAutomaticPairing(courseCode, slot, faculty, true);
    }
  }
  return true;
}

function removeClass(courseCode, slot, skipPairing = false) {
  const index = selectedClasses.findIndex(c => c.courseCode === courseCode && c.slot === slot);
  if (index !== -1) {
    const removed = selectedClasses[index];
    selectedClasses.splice(index, 1);
    saveToLocalStorage();
    renderAll();
    showNotification(`Removed ${removed.courseCode} (${removed.faculty})`, "info");

    // Automatic pairing removal
    if (!skipPairing) {
      const autoPairToggle = document.getElementById("auto-pair-toggle");
      const isAutoPairEnabled = autoPairToggle ? autoPairToggle.checked : true;
      if (isAutoPairEnabled) {
        handleAutomaticPairing(courseCode, slot, removed.faculty, false);
      }
    }
  }
}

// Automatic theory-lab pairing logic (opposite session, same faculty)
function handleAutomaticPairing(courseCode, slot, faculty, isAdding) {
  const isTheory = courseCode.endsWith("L");
  const isLab = courseCode.endsWith("P");
  if (!isTheory && !isLab) return;

  const baseCode = courseCode.slice(0, -1); // e.g. "ISWE407"
  const targetCode = baseCode + (isTheory ? "P" : "L"); // e.g. "ISWE407P"

  const targetCourse = COURSES.find(c => c.code === targetCode);
  if (!targetCourse) return;

  const cleanFaculty = faculty.replace(" (Theory)", "").replace(" (Lab)", "").trim();

  if (isAdding) {
    // Check if target is already selected
    const alreadySelected = selectedClasses.some(c => c.courseCode === targetCode);
    if (alreadySelected) return;

    const isMorning = isMorningSlot(slot);
    // Find options for the same faculty and opposite session
    const oppositeOption = targetCourse.options.find(opt => {
      const optFacultyClean = opt.faculty.replace(" (Theory)", "").replace(" (Lab)", "").trim();
      if (optFacultyClean !== cleanFaculty) return false;
      const optIsMorning = isMorningSlot(opt.slot);
      return optIsMorning !== isMorning; // Opposite session!
    });

    if (oppositeOption) {
      // Add it, skipPairing = true to prevent infinite loop
      addClass(targetCode, oppositeOption.slot, oppositeOption.faculty, oppositeOption.type, true);
      showNotification(`Automatically added associated ${isTheory ? 'Lab' : 'Theory'} for ${cleanFaculty} in the ${isMorning ? 'Afternoon' : 'Morning'}!`, "info");
    }
  } else {
    // Removing: remove the paired class
    const associated = selectedClasses.find(c => c.courseCode === targetCode);
    if (associated) {
      removeClass(targetCode, associated.slot, true);
    }
  }
}

function clearTimetable() {
  if (selectedClasses.length === 0) return;
  if (confirm("Are you sure you want to clear your current timetable?")) {
    selectedClasses = [];
    saveToLocalStorage();
    renderAll();
    showNotification("Timetable cleared.", "info");
  }
}

// LocalStorage Persistence
function saveToLocalStorage() {
  localStorage.setItem("college_timetable_classes", JSON.stringify(selectedClasses));
}

function loadFromLocalStorage() {
  const saved = localStorage.getItem("college_timetable_classes");
  if (saved) {
    try {
      selectedClasses = JSON.parse(saved);
    } catch (e) {
      selectedClasses = [];
    }
  }
}

// 6. UI Renderers
function renderCourseCatalog() {
  if (currentCategoryFilter === "Slot Directory") {
    renderSlotDirectory();
    return;
  }

  const container = document.getElementById("course-catalog");
  if (!container) return;

  container.innerHTML = "";

  // Filter courses based on search & active filters
  let filtered = COURSES;
  
  // Category filter
  if (currentCategoryFilter !== "All") {
    filtered = filtered.filter(course => course.category === currentCategoryFilter);
  }

  // Active Slot filter from clicked cell
  if (activeSlotFilter) {
    filtered = filtered.filter(course => {
      return course.options.some(opt => {
        const optCoords = getCoordinatesForSlot(opt.slot);
        return activeSlotFilter.slots.some(filterSlot => {
          const filterCoords = getCoordinatesForSlot(filterSlot);
          return optCoords.some(oc => filterCoords.some(fc => oc.day === fc.day && oc.col === fc.col));
        });
      });
    });
  }

  // Search query (code, name, faculty, slot)
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(course => {
      const matchesCode = course.code.toLowerCase().includes(q);
      const matchesName = course.name.toLowerCase().includes(q);
      const matchesFaculty = course.options.some(opt => opt.faculty.toLowerCase().includes(q));
      const matchesSlot = course.options.some(opt => opt.slot.toLowerCase().includes(q));
      return matchesCode || matchesName || matchesFaculty || matchesSlot;
    });
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <p>No subjects matches your search query.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.style.borderLeftColor = getCourseColor(course.code);

    // Group options by Morning and Afternoon
    const morningOpts = course.options.filter(opt => isMorningSlot(opt.slot));
    const afternoonOpts = course.options.filter(opt => !isMorningSlot(opt.slot));

    // Partner course badge logic (e.g. theory paired with lab)
    const isTheory = course.code.endsWith("L");
    const isLab = course.code.endsWith("P");
    const baseCode = course.code.slice(0, -1);
    const partnerCode = baseCode + (isTheory ? "P" : "L");
    const hasPartner = COURSES.some(c => c.code === partnerCode);
    
    let partnerBadgeHtml = "";
    if (hasPartner) {
      partnerBadgeHtml = `
        <span class="partner-course-badge" title="This course has a paired ${isTheory ? 'Lab' : 'Theory'} component">
          <i class="fas fa-link"></i> Pair: ${partnerCode}
        </span>
      `;
    }

    let optionsHtml = `<div class="course-sessions-container">`;

    // Morning sessions column
    optionsHtml += `<div class="session-column morning">`;
    optionsHtml += `<div class="session-divider morning"><i class="fas fa-sun"></i> Morning</div>`;
    if (morningOpts.length > 0) {
      morningOpts.forEach(opt => {
        const isAdded = selectedClasses.some(c => c.courseCode === course.code && c.slot === opt.slot && c.faculty === opt.faculty);
        optionsHtml += createOptionRow(course, opt, isAdded);
      });
    } else {
      optionsHtml += `<div class="no-sessions-placeholder">No morning sessions</div>`;
    }
    optionsHtml += `</div>`;

    // Afternoon sessions column
    optionsHtml += `<div class="session-column afternoon">`;
    optionsHtml += `<div class="session-divider afternoon"><i class="fas fa-moon"></i> Afternoon</div>`;
    if (afternoonOpts.length > 0) {
      afternoonOpts.forEach(opt => {
        const isAdded = selectedClasses.some(c => c.courseCode === course.code && c.slot === opt.slot && c.faculty === opt.faculty);
        optionsHtml += createOptionRow(course, opt, isAdded);
      });
    } else {
      optionsHtml += `<div class="no-sessions-placeholder">No afternoon sessions</div>`;
    }
    optionsHtml += `</div>`;

    optionsHtml += `</div>`;

    card.innerHTML = `
      <div class="course-header">
        <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 0.4rem;">
          <span class="course-code-badge" style="background: ${getCourseColor(course.code)}20; color: ${getCourseColor(course.code)}">
            ${course.code}
          </span>
          <span class="course-credits-badge">${course.credits} Credits</span>
          ${partnerBadgeHtml}
        </div>
        <div class="course-category-tag">${course.category}</div>
      </div>
      <h3 class="course-title">${course.name}</h3>
      <div class="course-options">
        ${optionsHtml}
      </div>
    `;

    container.appendChild(card);
  });

  // Attach hover events to option rows
  const rows = container.querySelectorAll(".option-row");
  rows.forEach(row => {
    row.addEventListener("mouseenter", () => {
      const slot = row.getAttribute("data-slot");
      const courseCode = row.getAttribute("data-code");
      highlightSlots(slot, getCourseColor(courseCode));
    });
    row.addEventListener("mouseleave", () => {
      clearHighlights();
    });
  });
}

function createOptionRow(course, opt, isAdded) {
  const clash = checkSlotClash(course.code, opt.slot, opt.faculty);
  const coOccur = getCoOccurringCourses(opt.slot, course.code);
  
  let coOccurHtml = "";
  if (coOccur.length > 0) {
    coOccurHtml = `<div class="co-occur-label">Also in slot: ${coOccur.join(", ")}</div>`;
  }

  let clashHtml = "";
  if (clash.clashed && !isAdded) {
    clashHtml = `<div class="clash-warning-text"><i class="fas fa-exclamation-triangle"></i> ${clash.reason}</div>`;
  }

  return `
    <div class="option-row-wrapper">
      <div class="option-row ${isAdded ? 'added' : ''} ${clash.clashed && !isAdded ? 'clashed' : ''}" 
           data-code="${course.code}" 
           data-slot="${opt.slot}" 
           data-faculty="${opt.faculty}" 
           data-type="${opt.type}"
           title="Faculty: ${opt.faculty}\nSlot: ${opt.slot}">
        <div class="option-details">
          <span class="option-slot">${opt.slot}</span>
          <span class="option-faculty">${opt.faculty}</span>
        </div>
        ${isAdded 
          ? `<button class="btn-remove-slot" onclick="removeClass('${course.code}', '${opt.slot}')">
               <i class="fas fa-minus-circle"></i> Remove
             </button>`
          : clash.clashed
            ? `<button class="btn-add-slot disabled" disabled title="${clash.reason}">
                 <i class="fas fa-ban"></i> Blocked
               </button>`
            : `<button class="btn-add-slot" onclick="addClass('${course.code}', '${opt.slot}', '${opt.faculty}', '${opt.type}')">
                 <i class="fas fa-plus-circle"></i> Add
               </button>`
        }
      </div>
      ${clashHtml}
      ${coOccurHtml}
    </div>
  `;
}

// Slot-wise Course Directory Renderer
function renderSlotDirectory() {
  const container = document.getElementById("course-catalog");
  if (!container) return;
  container.innerHTML = "";

  // Group all slot-wise options from all courses
  const slotData = {};
  
  COURSES.forEach(course => {
    course.options.forEach(opt => {
      const parts = opt.slot.split("+");
      const baseSlot = parts[0].trim(); // e.g. "B1" or "L37"
      
      if (!slotData[baseSlot]) {
        slotData[baseSlot] = {
          fullSlotName: opt.slot,
          courses: []
        };
      }
      
      slotData[baseSlot].courses.push({
        code: course.code,
        name: course.name,
        category: course.category,
        faculty: opt.faculty,
        type: opt.type,
        fullSlot: opt.slot
      });
    });
  });

  // Sort slots: Morning first, then Afternoon
  const sortedSlots = Object.keys(slotData).sort((a, b) => {
    const aMorning = isMorningSlot(a);
    const bMorning = isMorningSlot(b);
    if (aMorning && !bMorning) return -1;
    if (!aMorning && bMorning) return 1;
    return a.localeCompare(b);
  });

  const dirTitle = document.createElement("div");
  dirTitle.className = "directory-title";
  dirTitle.innerHTML = `
    <h3><i class="fas fa-folder-open"></i> Slot-wise Course Directory</h3>
    <p>Browse which subjects and faculties are available in each slot</p>
  `;
  container.appendChild(dirTitle);

  sortedSlots.forEach(baseSlot => {
    const slotInfo = slotData[baseSlot];
    const isMorning = isMorningSlot(baseSlot);
    
    const slotSection = document.createElement("div");
    slotSection.className = `slot-directory-card ${isMorning ? 'morning' : 'afternoon'}`;
    
    let rowsHtml = "";
    slotInfo.courses.forEach(c => {
      const isAdded = selectedClasses.some(sel => sel.courseCode === c.code && sel.slot === c.fullSlot && sel.faculty === c.faculty);
      const clash = checkSlotClash(c.code, c.fullSlot, c.faculty);
      
      rowsHtml += `
        <div class="dir-course-row ${isAdded ? 'added' : ''} ${clash.clashed && !isAdded ? 'clashed' : ''}">
          <div class="dir-course-info">
            <span class="dir-course-code" style="color: ${getCourseColor(c.code)}">${c.code}</span>
            <strong class="dir-course-name">${c.name}</strong>
            <span class="dir-faculty-name">${c.faculty}</span>
          </div>
          <div class="dir-actions">
            <span class="dir-full-slot-badge">${c.fullSlot}</span>
            ${isAdded 
              ? `<button class="btn-remove-slot btn-xs" onclick="removeClass('${c.code}', '${c.fullSlot}')">Remove</button>`
              : clash.clashed
                ? `<span class="clash-badge" title="${clash.reason}"><i class="fas fa-exclamation-triangle"></i> Clash</span>`
                : `<button class="btn-add-slot btn-xs" onclick="addClass('${c.code}', '${c.fullSlot}', '${c.faculty}', '${c.type}')">Add</button>`
            }
          </div>
        </div>
      `;
    });

    slotSection.innerHTML = `
      <div class="slot-dir-header">
        <div class="slot-dir-badge ${isMorning ? 'morning' : 'afternoon'}">
          <i class="${isMorning ? 'fas fa-sun' : 'fas fa-moon'}"></i>
          <span>Slot ${baseSlot} (${isMorning ? 'Morning' : 'Afternoon'})</span>
        </div>
      </div>
      <div class="slot-dir-courses">
        ${rowsHtml}
      </div>
    `;
    
    container.appendChild(slotSection);
  });
}

function renderTimetableGrid() {
  const tableBody = document.getElementById("timetable-grid-body");
  if (!tableBody) return;

  // Clear existing cells
  const rows = tableBody.querySelectorAll("tr");
  rows.forEach(row => {
    const cells = row.querySelectorAll("td:not(.day-header):not(.lunch-cell)");
    cells.forEach(cell => {
      cell.innerHTML = "";
      cell.className = "";
      cell.style.background = "";
      cell.removeAttribute("title");
    });
  });

  // Fill in active classes
  selectedClasses.forEach(item => {
    const coords = getCoordinatesForSlot(item.slot);
    coords.forEach(coord => {
      const row = rows[coord.day];
      if (!row) return;
      const cells = row.querySelectorAll("td:not(.day-header):not(.lunch-cell)");
      const cell = cells[coord.col];
      if (!cell) return;

      cell.className = "occupied-slot";
      cell.style.background = `${item.color}25`;
      cell.style.borderLeft = `3px solid ${item.color}`;
      
      const details = document.createElement("div");
      details.className = "slot-course-details";
      details.innerHTML = `
        <strong style="color: ${item.color}">${item.courseCode}</strong>
        <span class="grid-faculty">${item.faculty.replace(" (Theory)", "").replace(" (Lab)", "")}</span>
        <span class="grid-slot-label">${item.slot}</span>
      `;
      
      cell.appendChild(details);
      cell.setAttribute("title", `${item.courseCode} - ${item.courseName}\nFaculty: ${item.faculty}\nSlot: ${item.slot}`);
    });
  });
}

function renderSidebarSummary() {
  const listContainer = document.getElementById("selected-courses-list");
  const totalCreditsSpan = document.getElementById("total-credits-count");
  if (!listContainer || !totalCreditsSpan) return;

  listContainer.innerHTML = "";

  // Unique course codes selected
  const uniqueCourses = {};
  selectedClasses.forEach(c => {
    if (!uniqueCourses[c.courseCode]) {
      uniqueCourses[c.courseCode] = {
        name: c.courseName,
        color: c.color,
        credits: c.credits,
        sections: []
      };
    }
    uniqueCourses[c.courseCode].sections.push({ slot: c.slot, faculty: c.faculty, type: c.type });
  });

  const uniqueCodes = Object.keys(uniqueCourses);
  let totalCredits = 0;

  if (uniqueCodes.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-summary">
        <p>No subjects added yet. Select courses from the list to start building your timetable.</p>
      </div>
    `;
    totalCreditsSpan.textContent = "0";
    return;
  }

  uniqueCodes.forEach(code => {
    const course = uniqueCourses[code];
    totalCredits += course.credits;

    const summaryCard = document.createElement("div");
    summaryCard.className = "summary-course-card";
    summaryCard.style.borderLeft = `3px solid ${course.color}`;

    let sectionsHtml = "";
    course.sections.forEach(sec => {
      sectionsHtml += `
        <div class="summary-section-row">
          <span class="section-badge">${sec.type === 'LO' ? 'Lab' : 'Theory'} (${sec.slot})</span>
          <span class="section-faculty">${sec.faculty}</span>
          <button class="btn-delete-section" onclick="removeClass('${code}', '${sec.slot}')" title="Remove class">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      `;
    });

    summaryCard.innerHTML = `
      <div class="summary-card-header">
        <span class="summary-course-code" style="color: ${course.color}">${code}</span>
        <span class="summary-course-credits">${course.credits} Cr</span>
      </div>
      <div class="summary-course-name">${course.name}</div>
      <div class="summary-sections-list">
        ${sectionsHtml}
      </div>
    `;

    listContainer.appendChild(summaryCard);
  });

  totalCreditsSpan.textContent = totalCredits;
}

// 7. Interactive Slot Highlighting on Catalog Hover
function highlightSlots(slotName, color) {
  const coords = getCoordinatesForSlot(slotName);
  const tableBody = document.getElementById("timetable-grid-body");
  if (!tableBody) return;

  const rows = tableBody.querySelectorAll("tr");
  coords.forEach(coord => {
    const row = rows[coord.day];
    if (!row) return;
    const cells = row.querySelectorAll("td:not(.day-header):not(.lunch-cell)");
    const cell = cells[coord.col];
    if (!cell) return;

    // Add a pulsing preview highlight class
    cell.classList.add("highlight-preview");
    cell.style.setProperty("--highlight-color", color);
  });
}

function clearHighlights() {
  const cells = document.querySelectorAll(".highlight-preview");
  cells.forEach(cell => {
    cell.classList.remove("highlight-preview");
    cell.style.removeProperty("--highlight-color");
  });
}

// 8. Notifications System
function showNotification(message, type = "info") {
  const container = document.getElementById("notifications-container");
  if (!container) return;

  const notif = document.createElement("div");
  notif.className = `notification ${type}`;
  
  let icon = "info-circle";
  if (type === "success") icon = "check-circle";
  if (type === "error") icon = "exclamation-triangle";
  if (type === "warning") icon = "exclamation-circle";

  notif.innerHTML = `
    <i class="fas fa-${icon}"></i>
    <div class="notification-content">${message}</div>
    <button class="notification-close">&times;</button>
  `;

  container.appendChild(notif);

  // Auto remove
  const timer = setTimeout(() => {
    notif.classList.add("fade-out");
    notif.addEventListener("transitionend", () => notif.remove());
  }, 4000);

  // Close button
  notif.querySelector(".notification-close").addEventListener("click", () => {
    clearTimeout(timer);
    notif.remove();
  });
}

// 9. Filtering, Search and Slot Click Listeners
function setupFilterListeners() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategoryFilter = btn.getAttribute("data-category");
      
      // Clear slot filter when switching tabs
      if (activeSlotFilter) {
        clearSlotFilter();
      }
      
      renderCourseCatalog();
    });
  });

  const searchInput = document.getElementById("subject-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderCourseCatalog();
    });
  }

  // Hook up cell click filters
  const cells = document.querySelectorAll("#timetable-grid-body td[data-day]");
  cells.forEach(cell => {
    cell.addEventListener("click", () => {
      const day = parseInt(cell.getAttribute("data-day"));
      const col = parseInt(cell.getAttribute("data-col"));
      
      // Find which slot name matches this day and col coordinate
      const matchingSlots = [];
      for (const [slotName, coords] of Object.entries(SLOT_MAP)) {
        if (coords.some(c => c.day === day && c.col === col)) {
          matchingSlots.push(slotName);
        }
      }
      
      if (matchingSlots.length > 0) {
        filterCatalogBySlots(matchingSlots, day, col);
      }
    });
  });
}

// Grid Slot Filtering helpers
function filterCatalogBySlots(slots, day, col) {
  const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timeStrings = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "12:31 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "6:31 PM", "7:01 PM"
  ];
  
  activeSlotFilter = {
    slots,
    label: `${dayNames[day]} at ${timeStrings[col]} (${slots.join(", ")})`
  };
  
  // If in Slot Directory, switch back to "All" tab to show filtered subjects
  if (currentCategoryFilter === "Slot Directory") {
    const allBtn = document.querySelector('.filter-btn[data-category="All"]');
    if (allBtn) {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      allBtn.classList.add("active");
      currentCategoryFilter = "All";
    }
  }

  showFilterBadge();
  renderCourseCatalog();
  showNotification(`Filtering catalog by slot: ${slots.join(", ")}`, "info");
}

function showFilterBadge() {
  const banner = document.getElementById("slot-filter-banner");
  const label = document.getElementById("slot-filter-label");
  if (banner && label && activeSlotFilter) {
    label.textContent = activeSlotFilter.label;
    banner.style.display = "flex";
  }
}

function clearSlotFilter() {
  activeSlotFilter = null;
  const banner = document.getElementById("slot-filter-banner");
  if (banner) {
    banner.style.display = "none";
  }
  renderCourseCatalog();
}

// 10. Export Image Functionality (Print page style or Canvas)
function exportTimetable() {
  window.print(); // Polished print style is optimized to download/save as PDF cleanly!
}

function downloadTimetableImage() {
  const element = document.getElementById("main-timetable-grid");
  const wrapper = document.querySelector(".timetable-wrapper");
  if (!element || !wrapper) return;
  
  showNotification("Generating high-resolution image, please wait...", "info");
  
  // Clear any hover highlights before capturing
  clearHighlights();
  
  // Get the background color of the wrapper to ensure a solid background
  const bgColor = getComputedStyle(wrapper).backgroundColor || '#0f172a';
  
  // Use html2canvas to render the table directly
  html2canvas(element, {
    scale: 3, // Triple resolution scale factor for super crisp text and lines
    useCORS: true,
    backgroundColor: bgColor,
    logging: false
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "college_timetable_highres.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    showNotification("High-resolution timetable image downloaded!", "success");
  }).catch(err => {
    console.error("Image download failed:", err);
    showNotification("Failed to download image.", "error");
  });
}

// Render Master
function renderAll() {
  renderCourseCatalog();
  renderTimetableGrid();
  renderSidebarSummary();
}

// 11. Initializer
document.addEventListener("DOMContentLoaded", () => {
  // Load saved slots
  loadFromLocalStorage();

  // Setup UI elements, filters & slot click listeners
  setupFilterListeners();

  // Clear slot filter button listener
  const clearFilterBtn = document.getElementById("clear-slot-filter-btn");
  if (clearFilterBtn) {
    clearFilterBtn.addEventListener("click", clearSlotFilter);
  }

  // Auto-pair toggle listener
  const autoPairToggle = document.getElementById("auto-pair-toggle");
  if (autoPairToggle) {
    autoPairToggle.addEventListener("change", () => {
      renderCourseCatalog();
      showNotification(`Auto-pairing is now ${autoPairToggle.checked ? 'enabled' : 'disabled'}`, "info");
    });
  }

  // Theme Management
  const themeToggle = document.getElementById("theme-toggle-btn");
  if (themeToggle) {
    // Check saved theme or default to dark
    const savedTheme = localStorage.getItem("app_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeToggleIcon(themeToggle, savedTheme);

    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("app_theme", newTheme);
      updateThemeToggleIcon(themeToggle, newTheme);
      showNotification(`Switched to ${newTheme} theme`, "info");
    });
  }

  // Clear button listener
  const clearBtn = document.getElementById("clear-timetable-btn");
  if (clearBtn) {
    clearBtn.addEventListener("click", clearTimetable);
  }

  // Export button listener
  const exportBtn = document.getElementById("export-timetable-btn");
  if (exportBtn) {
    exportBtn.addEventListener("click", exportTimetable);
  }

  // Download Image button listener
  const downloadImageBtn = document.getElementById("download-image-btn");
  if (downloadImageBtn) {
    downloadImageBtn.addEventListener("click", downloadTimetableImage);
  }

  // Initial render
  renderAll();
});

function updateThemeToggleIcon(button, theme) {
  if (theme === "light") {
    button.innerHTML = '<i class="fas fa-moon"></i><span>Dark Mode</span>';
  } else {
    button.innerHTML = '<i class="fas fa-sun"></i><span>Light Mode</span>';
  }
}
