export type TicketStatus = "open" | "in_progress" | "resolved";

export type TicketPriority = "low" | "medium" | "high";

export type TicketCategory =
  | "hardware"
  | "software"
  | "account"
  | "network"
  | "other";

export interface Ticket {
  id: number;
  title: string;
  description: string;
  category: TicketCategory;
  priority: TicketPriority;
  status: TicketStatus;
}

export type NewTicket = {
  title: string;
  description: string;
  category: TicketCategory;
  priority: TicketPriority;
};