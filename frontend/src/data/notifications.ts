export interface NotificationItemData {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: "request" | "appointment" | "status" | "alert";
  role: "donor" | "recipient" | "hospital" | "admin" | "all";
  read: boolean;
  link?: string;
}

export const DEMO_NOTIFICATIONS: NotificationItemData[] = [
  {
    id: "notif-1",
    title: "New Matching Blood Request",
    message: "A patient at Tikur Anbessa Specialized Hospital urgently needs O- blood in Kirkos Sub-City.",
    timestamp: "10 minutes ago",
    type: "alert",
    role: "donor",
    read: false,
    link: "/blood-requests/REQ-001",
  },
  {
    id: "notif-2",
    title: "Donation Appointment Scheduled",
    message: "Your upcoming donation appointment at St. Paul's Hospital Millennium Medical College is set for tomorrow at 10:00 AM.",
    timestamp: "2 hours ago",
    type: "appointment",
    role: "donor",
    read: false,
    link: "/donor/donations",
  },
  {
    id: "notif-3",
    title: "Donor Responded to Request",
    message: "A verified voluntary donor responded to your blood request REQ-002 at St. Paul's Hospital.",
    timestamp: "3 hours ago",
    type: "request",
    role: "recipient",
    read: false,
    link: "/recipient/requests",
  },
  {
    id: "notif-4",
    title: "Blood Request Status Updated",
    message: "Your request REQ-003 was verified by Zewditu Memorial Hospital blood bank staff.",
    timestamp: "1 day ago",
    type: "status",
    role: "recipient",
    read: true,
    link: "/recipient/requests",
  },
  {
    id: "notif-5",
    title: "New Incoming Emergency Request",
    message: "A new emergency request for 2 units of O- blood was lodged for Tikur Anbessa Hospital.",
    timestamp: "25 minutes ago",
    type: "alert",
    role: "hospital",
    read: false,
    link: "/hospital/requests",
  },
  {
    id: "notif-6",
    title: "Donor Confirmed for Appointment",
    message: "Donor Yosef Tadesse confirmed the scheduled donation slot for April 2nd.",
    timestamp: "4 hours ago",
    type: "appointment",
    role: "hospital",
    read: true,
    link: "/hospital/donations",
  },
  {
    id: "notif-7",
    title: "System Backup & Network Check",
    message: "Routine integrity test completed for all 11 sub-city dispatch endpoints across Addis Ababa.",
    timestamp: "1 day ago",
    type: "status",
    role: "admin",
    read: true,
    link: "/admin/settings",
  },
  {
    id: "notif-8",
    title: "New Hospital Registration Pending",
    message: "Hayat Hospital Medical Center submitted verification documents for blood coordination.",
    timestamp: "2 days ago",
    type: "request",
    role: "admin",
    read: false,
    link: "/admin/hospitals",
  },
];
