import type { TicketStatus } from "../types/ticket";

type StatusBadgeProps = {
  status: TicketStatus;
};

function StatusBadge({ status }: StatusBadgeProps) {
  if (status === "open") {
    return (
      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
        Open
      </span>
    );
  }

  if (status === "in_progress") {
    return (
      <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
        In Progress
      </span>
    );
  }

  return (
    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
      Resolved
    </span>
  );
}

export default StatusBadge;