import Button from "../components/Button";
import Input from "../components/Input";

function RegisterPage() {
  return (
    <section className="mx-auto max-w-md px-6 py-10">
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-2xl font-bold">Register</h1>

        <p className="mb-6 text-sm text-slate-600">
          Create an account so you can submit and track support tickets.
        </p>

        <form className="space-y-4">
          <Input
            label="Name"
            id="name"
            placeholder="Enter your full name"
          />

          <Input
            label="Email"
            id="register-email"
            type="email"
            placeholder="you@example.com"
          />

          <Input
            label="Password"
            id="register-password"
            type="password"
            placeholder="Create a password"
          />

          <Button type="submit">Create Account</Button>
        </form>
      </div>
    </section>
  );
}

export default RegisterPage;