type PriorityBadgeProps = {
  priority: "low" | "medium" | "high";
};

function PriorityBadge({ priority }: PriorityBadgeProps) {
  if (priority === "low") {
    return (
      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
        Low
      </span>
    );
  }

  if (priority === "medium") {
    return (
      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
        Medium
      </span>
    );
  }

  return (
    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
      High
    </span>
  );
}

export default PriorityBadge;