function App() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-12">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
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

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="mb-2 font-semibold">Create Tickets</h2>
              <p className="text-sm text-slate-600">
                Employees will be able to submit support requests.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="mb-2 font-semibold">Manage Workflow</h2>
              <p className="text-sm text-slate-600">
                Support users will update ticket status and priority.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="mb-2 font-semibold">Track Stats</h2>
              <p className="text-sm text-slate-600">
                The dashboard will show open, resolved, and high-priority
                tickets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;