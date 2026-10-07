export interface Donation {
  id: string;
  requestId: string;
  donorName: string;
  donorId: string;
  bloodType: "O+" | "O-" | "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-";
  units: number;
  hospital: string;
  donationLocation: string;
  date: string;
  status: "Completed" | "Scheduled" | "Cancelled";
  notes?: string;
}

export const DEMO_DONATIONS: Donation[] = [
  {
    id: "DON-101",
    requestId: "REQ-001",
    donorName: "Sara Hailu",
    donorId: "usr-d2",
    bloodType: "O-",
    units: 1,
    hospital: "Tikur Anbessa Specialized Hospital",
    donationLocation: "Blood Bank Center, Room 104",
    date: "Mar 28, 2026",
    status: "Completed",
    notes: "Successful donation. Screening protocol cleared.",
  },
  {
    id: "DON-102",
    requestId: "REQ-002",
    donorName: "Yosef Tadesse",
    donorId: "usr-d1",
    bloodType: "O+",
    units: 1,
    hospital: "St. Paul's Hospital Millennium Medical College",
    donationLocation: "Main Blood Bank Clinic",
    date: "Apr 02, 2026",
    status: "Scheduled",
    notes: "Appointment confirmed for 10:00 AM.",
  },
  {
    id: "DON-103",
    requestId: "REQ-003",
    donorName: "Hiwot Mengistu",
    donorId: "usr-d4",
    bloodType: "B+",
    units: 1,
    hospital: "Zewditu Memorial Hospital",
    donationLocation: "Emergency Transfusion Unit",
    date: "Mar 15, 2026",
    status: "Completed",
    notes: "Direct emergency replacement donation completed.",
  },
  {
    id: "DON-104",
    requestId: "REQ-004",
    donorName: "Biruk Alemu",
    donorId: "usr-d3",
    bloodType: "A+",
    units: 1,
    hospital: "Yekatit 12 Hospital Medical College",
    donationLocation: "Clinical Pathology Ward",
    date: "Feb 22, 2026",
    status: "Completed",
    notes: "Voluntary donation session completed successfully.",
  },
  {
    id: "DON-105",
    requestId: "REQ-006",
    donorName: "Yosef Tadesse",
    donorId: "usr-d1",
    bloodType: "O+",
    units: 1,
    hospital: "Hayat Hospital Medical Center",
    donationLocation: "Ambulatory Blood Wing",
    date: "Feb 05, 2026",
    status: "Cancelled",
    notes: "Cancelled by donor due to temporary travel schedule.",
  },
  {
    id: "DON-106",
    requestId: "REQ-005",
    donorName: "Dawit Kebede",
    donorId: "usr-d5",
    bloodType: "AB-",
    units: 1,
    hospital: "Ras Desta Damtew Memorial Hospital",
    donationLocation: "Oncology Day Center",
    date: "Apr 05, 2026",
    status: "Scheduled",
    notes: "Waiting for scheduled medical pre-screening.",
  },
];
