export type TicketStatus = "open" | "in_progress" | "resolved";

export type TicketPriority = "low" | "medium" | "high";

export interface Ticket {
  id: number;
  title: string;
  description: string;
  category: string;
  priority: TicketPriority;
  status: TicketStatus;
}