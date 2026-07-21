import { useState } from "react";
import TicketCard from "../components/TicketCard";
import type {
  Ticket,
  TicketStatus,
} from "../types/ticket";

type DashboardPageProps = {
  tickets: Ticket[];
};

function DashboardPage({
  tickets,
}: DashboardPageProps) {
  const [searchText, setSearchText] = useState("");

  const [selectedStatus, setSelectedStatus] =
    useState<TicketStatus | "all">("all");

  const totalTickets = tickets.length;

  const openTickets = tickets.filter(
    (ticket) => ticket.status === "open"
  ).length;

  const resolvedTickets = tickets.filter(
    (ticket) => ticket.status === "resolved"
  ).length;

  const highPriorityTickets = tickets.filter(
    (ticket) => ticket.priority === "high"
  ).length;

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch = ticket.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesStatus =
      selectedStatus === "all" ||
      ticket.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-600">
          View, search, and filter support tickets.
        </p>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Total Tickets
          </p>

          <p className="mt-2 text-3xl font-bold">
            {totalTickets}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Open
          </p>

          <p className="mt-2 text-3xl font-bold">
            {openTickets}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Resolved
          </p>

          <p className="mt-2 text-3xl font-bold">
            {resolvedTickets}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            High Priority
          </p>

          <p className="mt-2 text-3xl font-bold">
            {highPriorityTickets}
          </p>
        </div>
      </div>

      <div className="mb-6 grid gap-4 rounded-2xl bg-white p-5 shadow-sm md:grid-cols-2">
        <div>
          <label
            htmlFor="search"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Search by title
          </label>

          <input
            id="search"
            value={searchText}
            onChange={(event) =>
              setSearchText(event.target.value)
            }
            placeholder="Example: Wi-Fi"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="status"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Filter by status
          </label>

          <select
            id="status"
            value={selectedStatus}
            onChange={(event) =>
              setSelectedStatus(
                event.target.value as
                  | TicketStatus
                  | "all"
              )
            }
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="in_progress">
              In Progress
            </option>
            <option value="resolved">
              Resolved
            </option>
          </select>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredTickets.length === 0 ? (
          <div className="rounded-xl bg-white p-6 text-slate-600 shadow-sm">
            No tickets found.
          </div>
        ) : (
          filteredTickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default DashboardPage;