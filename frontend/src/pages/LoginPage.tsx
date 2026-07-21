import Button from "../components/Button";
import Input from "../components/Input";

function LoginPage() {
  return (
    <section className="mx-auto max-w-md px-6 py-10">
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-2xl font-bold">Login</h1>

        <p className="mb-6 text-sm text-slate-600">
          Sign in to view and manage support tickets.
        </p>

        <form className="space-y-4">
          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="you@example.com"
          />

          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
          />

          <Button type="submit">Login</Button>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;