import { useState } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import { initialTickets } from "./data/tickets";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import CreateTicketPage from "./pages/CreateTicketPage";
import TicketDetailsPage from "./pages/TicketDetailsPage";
import type { NewTicket, Ticket } from "./types/ticket";

function App() {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);

  function addTicket(ticketData: NewTicket) {
    setTickets((currentTickets) => {
      const nextId =
        currentTickets.length === 0
          ? 1
          : Math.max(
              ...currentTickets.map((ticket) => ticket.id)
            ) + 1;

      const newTicket: Ticket = {
        id: nextId,
        title: ticketData.title,
        description: ticketData.description,
        category: ticketData.category,
        priority: ticketData.priority,
        status: "open",
      };

      return [newTicket, ...currentTickets];
    });
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/dashboard"
          element={<DashboardPage tickets={tickets} />}
        />

        <Route
          path="/tickets/new"
          element={
            <CreateTicketPage onCreateTicket={addTicket} />
          }
        />

        <Route
          path="/tickets/:ticketId"
          element={<TicketDetailsPage tickets={tickets} />}
        />
      </Routes>
    </main>
  );
}

export default App;