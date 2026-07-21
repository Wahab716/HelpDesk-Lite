import { Link } from "react-router";
import Button from "../components/Button";

function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
          HelpDesk Lite
        </p>

        <h1 className="mb-4 text-4xl font-bold">
          IT Ticketing & Support Dashboard
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-slate-600">
          A full-stack support dashboard where employees can submit tickets and
          support teams can manage status, priority, comments, and dashboard
          stats.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link to="/tickets/new">
            <Button>Create Ticket</Button>
          </Link>

          <Link to="/dashboard">
            <Button variant="secondary">View Dashboard</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePage;