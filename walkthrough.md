# Walkthrough - Custom College Subject Scheduler & Planner

The web application is fully styled, polished, and functional, adhering strictly to all requirements. It is located at:
`C:\Users\kommi\.gemini\antigravity\scratch\college-subject-scheduler\`

Below is a detailed breakdown of the implemented features, verification steps, and how the design rules were applied.

---

## 1. Side-by-Side Comparison of Morning & Afternoon Sessions
In the course catalog, sections are classified and displayed side-by-side in two symmetric columns within each subject card:
* **Morning Column**: Highlighted with a gold header containing a sun icon. Displays slots `A1` through `TG1` and lab slots `L1` to `L30`.
* **Afternoon Column**: Highlighted with a purple header containing a moon icon. Displays slots `A2` through `TDD2`, late evening slots `V3` to `V7`, and lab slots `L31` to `L60`.
* **Symmetric Alignment**: If a course only has sections in one session, the opposite column renders a placeholder (e.g., "No morning sessions"), keeping the columns perfectly balanced.
* **Compact Hover Tooltips**: Since the columns are narrow, option rows include tooltips (visible on hover) displaying the full faculty name and slot code to prevent readability issues.
* **Paired Component Badges**: If a course has a paired component (e.g., theory has a lab), a green `Pair: {code}` link badge is displayed in the header next to the course credits.

---

## 2. Flexible Lab-Theory Pairing & Override Switch
For courses with paired lecture and lab components (e.g., UI/UX Design `ISWE407L` / `ISWE407P` and Machine Learning `ISWE410L` / `ISWE410P`), the application offers a flexible pairing engine:
* **Auto-Pairing Switch**: A premium toggle switch, **Auto-Pair Theory & Lab**, is added to the catalog controls sidebar.
* **Automatic Pairing (Enabled)**: Selecting a theory section automatically registers the corresponding lab section for the **same faculty member in the opposite session** (and vice versa). Removing one automatically removes the other.
* **Manual Override (Disabled)**: Unchecking the switch disables automatic registration. This allows students to manually select and mix slots (e.g., choose a morning theory slot and a different afternoon lab slot, or select different faculties) giving them absolute scheduling freedom.

---

## 3. Co-occurring Slot Indicators & Decision Helper
To help students resolve scheduling bottlenecks, the application identifies and lists other subjects occupying the same time slot:
* **Co-occurring Labels**: Below each catalog option, a small italicized label (`Also in slot: ...`) lists other course codes in the curriculum that share that exact time coordinate.
  * *Example*: Under `ISWE402L` (Software Metrics) in slot `B1+TB1`, the helper displays `Also in slot: ISWE412L, ISWE416L` because Blockchain and Big Data also run in that slot. This informs the student that taking Software Metrics in `B1` will prevent them from selecting Blockchain or Big Data in `B1`, allowing them to make a deliberate, informed decision.
* **Detailed Clash Warnings**: If a slot is blocked due to a schedule clash, a detailed crimson warning card is rendered directly beneath the option, explaining exactly which course, faculty, and day/hour coordinate caused the block.

---

## 4. Slot-wise Course Directory
A dedicated tab, **Slot Directory**, classifies the entire slot matrix, showing:
* **Slot Grouping**: Every individual slot (e.g., `A1`, `B1`, `L37`) is organized in a card, sorted sequentially with Morning slots listed first, followed by Afternoon slots.
* **Faculty & Course Mapping**: Each slot card lists every course code, course title, and faculty member scheduled to teach in that slot.
* **Inline Actions**: Students can add or remove courses directly from the directory cards. If a course is blocked due to an existing schedule clash, a red **Clash** badge is displayed with a tooltip explaining the conflict.

---

## 5. Interactive Grid Filtering
Clicking any cell in the weekly timetable grid instantly filters the subject catalog:
* **Filter Banner**: A banner appears at the top of the catalog showing the selected day, hour, and the slots occupying that cell (e.g., `Filtering by slot: Monday at 8:00 AM (A1, L1)`).
* **Targeted View**: The catalog updates to display only the subjects that have sections scheduled in those slots, letting students quickly see their options for filling empty gaps.
* **Reset Button**: A single click on the banner's `Clear` button restores the full course list.

---

## 6. High-Fidelity Print-to-PDF Layout
The print layout (triggered via the **Print / PDF** button or standard browser print shortcut) is optimized to fit beautifully on a single sheet of paper:
* **Timetable Scaling**: The weekly grid automatically scales down with a compact font size (`6.5pt`) and reduced padding, preventing horizontal clipping.
* **Background Preservation**: Leverages CSS box-shadow inserts to force colored backgrounds on occupied cells, keeping the visual colors active.
* **Two-Column Print Summary**: The registered subjects list (`#printable-summary-card`) is reformatted into a clean, 2-column grid that prints directly below the schedule grid, listing the course codes, titles, credits, registered slots, and faculty names.
* **De-cluttering**: Hides the search bar, category filters, theme toggles, clear buttons, footer notes, and delete icons to keep the printed page professional.

---

## 7. Verification Steps
1. **Lab-Theory Pairing**:
   - Add `ISWE407L` (UI/UX Theory) taught by `RAJESWARI C` in the Morning slot `A1+TA1`.
   - **Verification**: UI/UX Lab `ISWE407P` taught by `RAJESWARI C` in the Afternoon slot `L23+L24` is automatically added. Total registered credits updates to `4` (3 for theory + 1 for lab).
   - Remove `ISWE407P`.
   - **Verification**: Both the lab and theory courses are removed together, and credits return to `0`.
2. **Clash Detection**:
   - Add `ISWE402L` in slot `B1+TB1`.
   - Look at `ISWE412L` (Blockchain) in slot `B1+TB1`.
   - **Verification**: The add button for `ISWE412L` is replaced by a disabled **Blocked** button, and a red warning card explains the clash.
3. **Slot Directory**:
   - Click the **Slot Directory** tab.
   - **Verification**: All slots are beautifully grouped into morning and afternoon cards.
4. **Grid Filtering**:
   - Click the Monday 8:00 AM cell on the grid.
   - **Verification**: The filter banner appears, and the catalog filters to show only courses available in `A1` or `L1`.
5. **Print Preview**:
   - Click **Print / PDF**.
   - **Verification**: The browser print dialog displays a single-page document with the visual weekly grid followed by the two-column registered subjects list.
