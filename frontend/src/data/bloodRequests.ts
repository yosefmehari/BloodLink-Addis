export interface BloodRequest {
  id: string;
  bloodType: "O+" | "O-" | "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-";
  units: number;
  hospital: string;
  location: "Bole" | "Kazanchis" | "Piassa" | "Lideta" | "Arada" | "Yeka" | "Kirkos";
  urgency: "Emergency" | "Urgent" | "Normal";
  status: "Active" | "Fulfilled" | "Pending";
  description: string;
  createdAt: string;
}

export const DEMO_REQUESTS: BloodRequest[] = [
  {
    id: "REQ-001",
    bloodType: "O-",
    units: 2,
    hospital: "Tikur Anbessa Specialized Hospital",
    location: "Kirkos",
    urgency: "Emergency",
    status: "Active",
    description: "Urgent need for trauma surgery patient in the emergency ICU ward. Compatible O-negative donors requested immediately.",
    createdAt: "15 minutes ago",
  },
  {
    id: "REQ-002",
    bloodType: "A+",
    units: 3,
    hospital: "St. Paul's Hospital Millennium Medical College",
    location: "Lideta",
    urgency: "Urgent",
    status: "Active",
    description: "Required for an upcoming scheduled cardiovascular procedure tomorrow morning. Voluntary donors needed for preoperative preparation.",
    createdAt: "1 hour ago",
  },
  {
    id: "REQ-003",
    bloodType: "B+",
    units: 1,
    hospital: "Zewditu Memorial Hospital",
    location: "Kirkos",
    urgency: "Emergency",
    status: "Active",
    description: "Immediate replacement units needed for postpartum patient care following complex emergency delivery.",
    createdAt: "2 hours ago",
  },
  {
    id: "REQ-004",
    bloodType: "O+",
    units: 2,
    hospital: "Yekatit 12 Hospital Medical College",
    location: "Arada",
    urgency: "Normal",
    status: "Active",
    description: "Replenishing dedicated surgery stock for pediatric orthopedic patient undergoing corrective limb operation.",
    createdAt: "3 hours ago",
  },
  {
    id: "REQ-005",
    bloodType: "AB-",
    units: 1,
    hospital: "Ras Desta Damtew Memorial Hospital",
    location: "Piassa",
    urgency: "Urgent",
    status: "Active",
    description: "Rare blood group needed for ongoing oncology transfusion therapy support in the hematology unit.",
    createdAt: "4 hours ago",
  },
  {
    id: "REQ-006",
    bloodType: "A-",
    units: 2,
    hospital: "Hayat Hospital Medical Center",
    location: "Bole",
    urgency: "Emergency",
    status: "Active",
    description: "Accident and trauma stabilization in progress, immediate donors requested to replenish emergency reserve.",
    createdAt: "5 hours ago",
  },
  {
    id: "REQ-007",
    bloodType: "B-",
    units: 1,
    hospital: "Korean Hospital (MCM)",
    location: "Yeka",
    urgency: "Normal",
    status: "Active",
    description: "Routine unit requirement for chronic anemia patient scheduled treatment in the outpatient clinical wing.",
    createdAt: "6 hours ago",
  },
  {
    id: "REQ-008",
    bloodType: "AB+",
    units: 2,
    hospital: "Bethel Teaching General Hospital",
    location: "Kazanchis",
    urgency: "Urgent",
    status: "Active",
    description: "Required before dialysis and specialized surgical recovery monitoring under the nephrology service.",
    createdAt: "8 hours ago",
  },
];

export function getBloodRequestById(id: string): BloodRequest | undefined {
  const normalizedId = id.trim().toLowerCase();
  return DEMO_REQUESTS.find((req) => {
    const reqNormalized = req.id.toLowerCase();
    if (reqNormalized === normalizedId) return true;
    
    // Support matching numeric shorthand like "1" matching "REQ-001"
    const numericPart = req.id.replace(/^REQ-0*/i, "");
    if (numericPart.toLowerCase() === normalizedId) return true;

    return false;
  });
}
