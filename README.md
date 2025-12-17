# HSL Labs – Operations Dashboard

A modern, responsive healthcare operations dashboard built using **HTML, Tailwind CSS, and component‑based UI principles**. This project demonstrates real‑world lab workflows such as patient intake, disclosures, inventory, packaging, billing, and training management.

---

## 📌 Project Overview

The **HSL Labs Dashboard** is designed to help laboratory staff and administrators quickly monitor daily operations, track task statuses, and manage critical workflows across devices (desktop, tablet, and mobile).

The UI focuses on:

- Clarity and usability for healthcare staff
- Clean, professional visual design
- Responsive layouts for real‑world usage

---

## 🎯 Assignment Objectives Covered

This project fulfills the following evaluation criteria:

### ✅ Modern, clean, professional dashboard design

- Card‑based KPI layout
- Clear visual hierarchy
- Minimal, purposeful color usage

### ✅ Responsive UI (Desktop / Tablet / Mobile)

- Desktop: full data table and KPIs
- Tablet: adaptive grid and scrollable layouts
- Mobile: card views, bottom navigation, slide‑in menu

### ✅ Built using HTML + Tailwind CSS

- Tailwind utility classes used exclusively for styling
- No external UI frameworks (Bootstrap, MUI, etc.)

### ✅ Component‑based & Blade‑compatible structure

- Reusable UI components (KPI cards, navigation items, tables)
- Easily convertible to Laravel Blade partials

### ✅ Usability & accessibility considerations

- Clear labels and icons
- Status indicators with text + icons (not color‑only)
- Search, filtering, pagination, loading, and empty states

### ✅ Clear communication of design decisions

- Designed around real healthcare lab workflows
- Optimized for daily operational monitoring

---

## 🧩 Features Implemented

### Core Workflows

- **Patient Intake**
- **Disclosures**
- **Inventory Management**
- **Packaging**
- **Billing**
- **Training**

### Dashboard Capabilities

- KPI metrics overview
- **Universal search:** allows searching across all patient names and action types, instantly filtering results across Pending, In Progress, and Completed views
- Search and status filters
- Paginated task list
- **Real-time status updates:** when an action status is changed, the patient entry is automatically re-segregated into **Pending**, **In Progress**, or **Completed** views
- Dynamic filtering ensures patients appear only under the correct status category
- Status update actions via dropdown
- Responsive navigation (top, side, bottom)
- Dynamic current date and day display

---

## 🛠 Tech Stack

- **HTML5**
- **Tailwind CSS**
- **JavaScript (React for component structure)**

> Note: Although implemented in React, the UI architecture is intentionally Blade‑compatible and can be directly translated into Laravel Blade templates.

---

## 📱 Responsiveness Strategy

| Device  | UX Approach                         |
| ------- | ----------------------------------- |
| Desktop | Full table layout, expanded KPIs    |
| Tablet  | Condensed grid, scrollable content  |
| Mobile  | Card‑based lists, bottom navigation |

---

## 🧠 Design Rationale

Healthcare staff need:

- Fast access to task status
- Clear prioritization
- Minimal cognitive load

This dashboard prioritizes **speed, clarity, and accessibility**, ensuring efficient daily operations across different roles and devices.

---

## 🚀 Getting Started

```bash
npm install
npm start
```

---

## 📁 Repository

**GitHub:** `HSL_Labs`

---

## 👤 Author

Developed as part of a UI/Frontend assignment to demonstrate dashboard design, Tailwind CSS proficiency, and component‑based thinking.

---

✅ This project intentionally focuses on **UI/UX quality and real‑world workflow representation** rather than backend integration.
