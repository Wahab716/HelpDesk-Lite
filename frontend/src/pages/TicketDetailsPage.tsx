import { Link, useParams } from "react-router";
import Button from "../components/Button";
import PriorityBadge from "../components/PriorityBadge";
import StatusBadge from "../components/StatusBadge";
import type {
  Ticket,
  TicketCategory,
} from "../types/ticket";

type TicketDetailsPageProps = {
  tickets: Ticket[];
};

function formatCategory(
  category: TicketCategory
) {
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

function TicketDetailsPage({
  tickets,
}: TicketDetailsPageProps) {
  const params = useParams();

  const ticketId = Number(params.ticketId);

  const ticket = tickets.find(
    (currentTicket) =>
      currentTicket.id === ticketId
  );

  if (!ticket) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-10">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="mb-2 text-2xl font-bold">
            Ticket Not Found
          </h1>

          <p className="mb-6 text-slate-600">
            The ticket you are looking for does not
            exist.
          </p>

          <Link to="/dashboard">
            <Button>Back to Dashboard</Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold text-blue-600">
              Ticket #{ticket.id}
            </p>

            <h1 className="text-3xl font-bold">
              {ticket.title}
            </h1>
          </div>

          <StatusBadge status={ticket.status} />
        </div>

        <p className="mb-6 text-slate-700">
          {ticket.description}
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          <PriorityBadge
            priority={ticket.priority}
          />

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {formatCategory(ticket.category)}
          </span>
        </div>

        <div className="mb-8 rounded-xl border border-slate-200 p-5">
          <h2 className="mb-3 text-lg font-bold">
            Comments
          </h2>

          <div className="space-y-3">
            <div className="rounded-lg bg-slate-100 p-4">
              <p className="text-sm font-semibold">
                Support Admin
              </p>

              <p className="mt-1 text-sm text-slate-600">
                We are reviewing this ticket. Fake
                comment for now.
              </p>
            </div>

            <div className="rounded-lg bg-slate-100 p-4">
              <p className="text-sm font-semibold">
                Employee
              </p>

              <p className="mt-1 text-sm text-slate-600">
                Thanks, I can provide more details if
                needed.
              </p>
            </div>
          </div>
        </div>

        <Link to="/dashboard">
          <Button variant="secondary">
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default TicketDetailsPage;