export interface ReportCategoryData {
  label: string;
  count: number;
  percentage?: number;
  color?: string;
}

export const REQUESTS_BY_BLOOD_TYPE: ReportCategoryData[] = [
  { label: "O+", count: 42, percentage: 28 },
  { label: "O-", count: 32, percentage: 21 },
  { label: "A+", count: 28, percentage: 19 },
  { label: "A-", count: 14, percentage: 9 },
  { label: "B+", count: 18, percentage: 12 },
  { label: "B-", count: 7, percentage: 5 },
  { label: "AB+", count: 6, percentage: 4 },
  { label: "AB-", count: 3, percentage: 2 },
];

export const REQUESTS_BY_URGENCY: ReportCategoryData[] = [
  { label: "Emergency", count: 45, percentage: 30, color: "bg-red-600" },
  { label: "Urgent", count: 65, percentage: 43, color: "bg-amber-500" },
  { label: "Normal", count: 40, percentage: 27, color: "bg-blue-500" },
];

export const DONATIONS_BY_MONTH: ReportCategoryData[] = [
  { label: "Nov 2025", count: 24 },
  { label: "Dec 2025", count: 35 },
  { label: "Jan 2026", count: 48 },
  { label: "Feb 2026", count: 62 },
  { label: "Mar 2026", count: 78 },
  { label: "Apr 2026 (MTD)", count: 30 },
];

export const DONORS_BY_BLOOD_TYPE: ReportCategoryData[] = [
  { label: "O+", count: 420, percentage: 35 },
  { label: "O-", count: 180, percentage: 15 },
  { label: "A+", count: 260, percentage: 22 },
  { label: "A-", count: 95, percentage: 8 },
  { label: "B+", count: 140, percentage: 12 },
  { label: "B-", count: 45, percentage: 4 },
  { label: "AB+", count: 40, percentage: 3 },
  { label: "AB-", count: 20, percentage: 1 },
];

export const REQUESTS_BY_LOCATION: ReportCategoryData[] = [
  { label: "Kirkos", count: 38, percentage: 25 },
  { label: "Bole", count: 32, percentage: 21 },
  { label: "Lideta", count: 25, percentage: 17 },
  { label: "Arada", count: 19, percentage: 13 },
  { label: "Yeka", count: 18, percentage: 12 },
  { label: "Piassa", count: 11, percentage: 7 },
  { label: "Kazanchis", count: 7, percentage: 5 },
];
