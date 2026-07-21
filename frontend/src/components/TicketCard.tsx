import { Link } from "react-router";
import type { Ticket, TicketCategory } from "../types/ticket";
import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";
import Button from "./Button";

type TicketCardProps = {
  ticket: Ticket;
};

function formatCategory(category: TicketCategory) {
  if (category === "hardware") {
    return "Hardware";
  }

  if (category === "software") {
    return "Software";
  }

  if (category === "account") {
    return "Account";
  }

  if (category === "network") {
    return "Network";
  }

  return "Other";
}

function TicketCard({ ticket }: TicketCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {ticket.title}
          </h3>

          <p className="mt-1 text-sm text-slate-600">{ticket.description}</p>
        </div>

        <StatusBadge status={ticket.status} />
      </div>

      <div className="mb-5 flex flex-wrap items-center gap-2">
        <PriorityBadge priority={ticket.priority} />

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {formatCategory(ticket.category)}
        </span>
      </div>

      <Link to={`/tickets/${ticket.id}`}>
        <Button variant="secondary">View Details</Button>
      </Link>
    </article>
  );
}

export default TicketCard;