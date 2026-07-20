import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";
import Button from "./Button";

type TicketCardProps = {
    title: string;
    description: string;
    category: string;
    status: "open" | "in_progress" | "resolved";
    priority: "low" | "medium" | "high";
};

function TicketCard({
    title,
    description,
    category,
    status,
    priority,
}: TicketCardProps) {
    return (
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{description}</p>
                </div>

                <StatusBadge status={status} />
            </div>

            <div className="mb-5 flex flex-wrap items-center gap-2">
                <PriorityBadge priority={priority} />

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {category}
                </span>
            </div>

            <Button variant="secondary">View Details</Button>
        </article>
    );
}

export default TicketCard;