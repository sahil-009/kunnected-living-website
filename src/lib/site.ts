export const company = {
  name: "Kunnected FM",
  legalName: "Kunnected Living Facilities Management Services LLC",
  tagline:
    "To manage student living with professionalism and heart, ensuring comfort, safety, and peace of mind every day.",
  purpose: "Connected Campus Excellence",
  address: {
    line1: "Sas Al Nakhl Campus",
    line2: "Abu Dhabi, United Arab Emirates",
  },
  tel: "+971 2 312 3333",
  mobile: "+971 2 401 8000",
  email: "info@kunnectedfm.ae",
  web: "www.kunnectedfm.ae",
} as const;

export const services = [
  {
    slug: "facility-management",
    title: "Facility Management",
    summary:
      "Total oversight of every building system, contract and service line across the campus estate.",
  },
  {
    slug: "cleaning",
    title: "Cleaning & Housekeeping",
    summary:
      "Residence-grade hygiene programmes tuned to term-time occupancy and turnaround windows.",
  },
  {
    slug: "hvac",
    title: "HVAC & Air Cooling",
    summary:
      "Installation, contracting and maintenance of ventilation and air conditioning plant.",
  },
  {
    slug: "electrical",
    title: "Electrical Services",
    summary:
      "Fittings, fixtures, distribution and testing regimes kept continuously compliant.",
  },
  {
    slug: "mechanical",
    title: "Mechanical & Plumbing",
    summary: "Water systems, pumps and drainage maintained for uninterrupted supply.",
  },
  {
    slug: "fire-safety",
    title: "Fire & Life Safety",
    summary: "Detection, suppression and evacuation systems held to statutory standard.",
  },
  {
    slug: "preventive-maintenance",
    title: "Preventive Maintenance",
    summary: "Planned regimes that retire failures before a student ever notices one.",
  },
  {
    slug: "asset-management",
    title: "Asset Management",
    summary: "Registers, condition data and lifecycle tracking across the whole estate.",
  },
  {
    slug: "project-management",
    title: "Project Management",
    summary: "Fit-outs, upgrades and refurbishments delivered around the academic calendar.",
  },
  {
    slug: "operations-management",
    title: "Operations Management",
    summary: "Helpdesk, mobilisation, reporting and the daily rhythm of a running campus.",
  },
  {
    slug: "emergency-maintenance",
    title: "Emergency Maintenance",
    summary: "24/7 response with defined escalation and resolution commitments.",
  },
] as const;

export const foundations = [
  {
    n: "01",
    title: "Seamless Operations",
    body: "Every system, service and space functions without disruption. From maintenance to utilities, the focus is continuity and reliability at every level.",
  },
  {
    n: "02",
    title: "Intelligent Management",
    body: "Data, technology and integrated platforms monitor, optimise and improve performance across campus infrastructure.",
  },
  {
    n: "03",
    title: "Student-centric Experience",
    body: "Every decision is shaped around the people who use the campus — safe, comfortable and efficient environments for students, faculty and staff.",
  },
  {
    n: "04",
    title: "Culture of Responsiveness",
    body: "We act before issues arise and respond quickly when they do, ensuring a campus that is always supported and always operational.",
  },
] as const;

export const values = ["Reliable", "Efficient", "Connected", "Proactive"] as const;

export const industries = [
  { title: "Universities", body: "Academic buildings, laboratories, libraries and lecture estates." },
  { title: "Student Accommodation", body: "Residences where uptime is measured in comfort, not tickets." },
  { title: "Campus Infrastructure", body: "Utilities, plant rooms, distribution and shared services." },
  { title: "Sports & Amenity", body: "Gyms, dining halls and social spaces with heavy daily load." },
] as const;

export const navigation = [
  { label: "About", to: "/" },
  { label: "Industries", to: "/" },
  { label: "Our Process", to: "/" },
  { label: "Sustainability", to: "/" },
  { label: "Insights", to: "/" },
  { label: "Contact", to: "/" },
] as const;
