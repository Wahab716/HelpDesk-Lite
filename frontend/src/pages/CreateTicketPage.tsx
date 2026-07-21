import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import type {
  NewTicket,
  TicketCategory,
  TicketPriority,
} from "../types/ticket";

type CreateTicketPageProps = {
  onCreateTicket: (ticket: NewTicket) => void;
};

function CreateTicketPage({
  onCreateTicket,
}: CreateTicketPageProps) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] =
    useState<TicketCategory>("hardware");
  const [priority, setPriority] =
    useState<TicketPriority>("low");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanedTitle = title.trim();
    const cleanedDescription = description.trim();

    if (!cleanedTitle || !cleanedDescription) {
      return;
    }

    onCreateTicket({
      title: cleanedTitle,
      description: cleanedDescription,
      category,
      priority,
    });

    navigate("/dashboard");
  }

  return (
    <section className="mx-auto max-w-2xl px-6 py-10">
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-2xl font-bold">Create Ticket</h1>

        <p className="mb-6 text-sm text-slate-600">
          Submit a new IT support request.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Title
            </label>

            <input
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Example: Wi-Fi not working"
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Description
            </label>

            <textarea
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Describe the issue..."
              rows={5}
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Category
            </label>

            <select
              id="category"
              value={category}
              onChange={(event) =>
                setCategory(event.target.value as TicketCategory)
              }
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="hardware">Hardware</option>
              <option value="software">Software</option>
              <option value="account">Account</option>
              <option value="network">Network</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="priority"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Priority
            </label>

            <select
              id="priority"
              value={priority}
              onChange={(event) =>
                setPriority(event.target.value as TicketPriority)
              }
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <Button type="submit">Submit Ticket</Button>
        </form>
      </div>
    </section>
  );
}

export default CreateTicketPage;