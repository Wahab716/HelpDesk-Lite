import type { Ticket } from "../types/ticket";

export const tickets: Ticket[] = [
  {
    id: 1,
    title: "Wi-Fi not working",
    description: "My laptop keeps disconnecting from the office Wi-Fi.",
    category: "network",
    priority: "high",
    status: "open",
  },
  {
    id: 2,
    title: "Password reset needed",
    description: "I forgot my password and cannot log into my account.",
    category: "account",
    priority: "medium",
    status: "in_progress",
  },
  {
    id: 3,
    title: "Monitor has no display",
    description: "The monitor is plugged in, but the screen stays black.",
    category: "hardware",
    priority: "low",
    status: "resolved",
  },
];