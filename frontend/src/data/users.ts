export interface User {
  id: string;
  name: string;
  email: string;
  role: "donor" | "recipient" | "hospital" | "admin";
  phone: string;
  location: string;
  status: "Active" | "Pending" | "Suspended";
  registeredDate: string;
  // Specific role attributes
  bloodType?: "O+" | "O-" | "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-";
  availability?: "Available" | "Unavailable" | "Busy";
  lastDonationDate?: string;
  totalDonations?: number;
  activeRequestsCount?: number;
  hospitalAddress?: string;
  contactPerson?: string;
}

export const DEMO_USERS: User[] = [
  // Donors
  {
    id: "usr-d1",
    name: "Yosef Tadesse",
    email: "yosef.donor@example.com",
    role: "donor",
    phone: "+251 91 123 4567",
    location: "Bole",
    status: "Active",
    registeredDate: "Jan 12, 2026",
    bloodType: "O+",
    availability: "Available",
    lastDonationDate: "Nov 14, 2025",
    totalDonations: 4,
  },
  {
    id: "usr-d2",
    name: "Sara Hailu",
    email: "sara.hailu@example.com",
    role: "donor",
    phone: "+251 92 234 5678",
    location: "Kirkos",
    status: "Active",
    registeredDate: "Feb 03, 2026",
    bloodType: "O-",
    availability: "Available",
    lastDonationDate: "Dec 20, 2025",
    totalDonations: 6,
  },
  {
    id: "usr-d3",
    name: "Biruk Alemu",
    email: "biruk.a@example.com",
    role: "donor",
    phone: "+251 93 345 6789",
    location: "Yeka",
    status: "Active",
    registeredDate: "Feb 18, 2026",
    bloodType: "A+",
    availability: "Busy",
    lastDonationDate: "Jan 05, 2026",
    totalDonations: 2,
  },
  {
    id: "usr-d4",
    name: "Hiwot Mengistu",
    email: "hiwot.m@example.com",
    role: "donor",
    phone: "+251 94 456 7890",
    location: "Lideta",
    status: "Active",
    registeredDate: "Mar 01, 2026",
    bloodType: "B+",
    availability: "Available",
    lastDonationDate: "Never",
    totalDonations: 0,
  },
  {
    id: "usr-d5",
    name: "Dawit Kebede",
    email: "dawit.k@example.com",
    role: "donor",
    phone: "+251 95 567 8901",
    location: "Arada",
    status: "Pending",
    registeredDate: "Mar 22, 2026",
    bloodType: "AB-",
    availability: "Unavailable",
    lastDonationDate: "Never",
    totalDonations: 0,
  },

  // Recipients
  {
    id: "usr-r1",
    name: "Tigist Bekele",
    email: "tigist.b@example.com",
    role: "recipient",
    phone: "+251 91 765 4321",
    location: "Bole",
    status: "Active",
    registeredDate: "Feb 14, 2026",
    activeRequestsCount: 1,
  },
  {
    id: "usr-r2",
    name: "Abebe Demisse",
    email: "abebe.d@example.com",
    role: "recipient",
    phone: "+251 92 876 5432",
    location: "Kirkos",
    status: "Active",
    registeredDate: "Feb 28, 2026",
    activeRequestsCount: 2,
  },
  {
    id: "usr-r3",
    name: "Bethlehem Girma",
    email: "bethlehem.g@example.com",
    role: "recipient",
    phone: "+251 93 987 6543",
    location: "Piassa",
    status: "Active",
    registeredDate: "Mar 10, 2026",
    activeRequestsCount: 0,
  },

  // Hospitals
  {
    id: "usr-h1",
    name: "Tikur Anbessa Specialized Hospital",
    email: "contact@tikuranbessa.gov.et",
    role: "hospital",
    phone: "+251 11 551 1211",
    location: "Kirkos",
    status: "Active",
    registeredDate: "Jan 05, 2026",
    hospitalAddress: "Zambia St, Kirkos Sub-City, Addis Ababa",
    contactPerson: "Dr. Henok Solomon (Blood Bank Director)",
    activeRequestsCount: 3,
  },
  {
    id: "usr-h2",
    name: "St. Paul's Hospital Millennium Medical College",
    email: "bloodbank@sphmmc.edu.et",
    role: "hospital",
    phone: "+251 11 275 0125",
    location: "Lideta",
    status: "Active",
    registeredDate: "Jan 15, 2026",
    hospitalAddress: "Swaziland St, Lideta Sub-City, Addis Ababa",
    contactPerson: "Sister Almaz Teshome (Head Nurse)",
    activeRequestsCount: 2,
  },
  {
    id: "usr-h3",
    name: "Zewditu Memorial Hospital",
    email: "info@zewdituhospital.org",
    role: "hospital",
    phone: "+251 11 551 8085",
    location: "Kirkos",
    status: "Active",
    registeredDate: "Feb 01, 2026",
    hospitalAddress: "Sudan St, Kirkos Sub-City, Addis Ababa",
    contactPerson: "Dr. Meron Getachew",
    activeRequestsCount: 1,
  },
  {
    id: "usr-h4",
    name: "Hayat Hospital Medical Center",
    email: "emergency@hayathospital.et",
    role: "hospital",
    phone: "+251 11 662 4488",
    location: "Bole",
    status: "Pending",
    registeredDate: "Mar 15, 2026",
    hospitalAddress: "Bole Medhanialem Area, Addis Ababa",
    contactPerson: "Dr. Nahom Zerihun",
    activeRequestsCount: 1,
  },

  // Admins
  {
    id: "usr-a1",
    name: "Admin BloodLink",
    email: "admin@bloodlink-addis.et",
    role: "admin",
    phone: "+251 11 600 0000",
    location: "Addis Ababa Central",
    status: "Active",
    registeredDate: "Jan 01, 2026",
  },
];

export const CURRENT_DEMO_DONOR = DEMO_USERS[0];
export const CURRENT_DEMO_RECIPIENT = DEMO_USERS[5];
export const CURRENT_DEMO_HOSPITAL = DEMO_USERS[8];
export const CURRENT_DEMO_ADMIN = DEMO_USERS[12];
