import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Input from "./components/Input";
import TicketCard from "./components/TicketCard";

function App() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 rounded-2xl bg-white p-8 shadow-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            HelpDesk Lite
          </p>

          <h1 className="mb-4 text-4xl font-bold">
            IT Ticketing & Support Dashboard
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-slate-600">
            A full-stack support dashboard where employees can submit tickets
            and support teams can manage status, priority, comments, and
            dashboard stats.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button>Create Ticket</Button>
            <Button variant="secondary">View Dashboard</Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold">Quick Ticket Form</h2>

            <form className="space-y-4">
              <Input
                label="Ticket Title"
                id="ticket-title"
                placeholder="Example: Wi-Fi not working"
              />

              <Input
                label="Category"
                id="ticket-category"
                placeholder="Example: Network"
              />

              <Button type="submit">Submit Ticket</Button>
            </form>
          </section>

          <section>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Recent Tickets</h2>
                <p className="text-sm text-slate-600">
                  These are fake tickets for now, later they will come from the
                  backend.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <TicketCard
                title="Wi-Fi not working"
                description="My laptop keeps disconnecting from the office Wi-Fi."
                category="Network"
                status="open"
                priority="high"
              />

              <TicketCard
                title="Password reset needed"
                description="I forgot my password and cannot log into my account."
                category="Account"
                status="in_progress"
                priority="medium"
              />

              <TicketCard
                title="Monitor has no display"
                description="The monitor is plugged in, but the screen stays black."
                category="Hardware"
                status="resolved"
                priority="low"
              />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default App;