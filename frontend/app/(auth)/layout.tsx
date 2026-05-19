import Link from "next/link";
import { CheckCircle2, ShieldCheck, Users } from "lucide-react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="dashboard-grid flex min-h-screen flex-col bg-background">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 md:px-6">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <CheckCircle2 className="h-4 w-4" />
          </span>
          <span>TeamTask</span>
        </Link>
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
          Back home
        </Link>
      </div>
      <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-4 py-10 md:px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="hidden lg:block">
          <p className="text-sm font-medium text-primary">Project work, permissions included</p>
          <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-tight">
            One login for the dashboard your team actually uses.
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">
            Sign in to manage projects, assign owners, monitor overdue tasks, and keep Admin and Member actions separated.
          </p>
          <div className="mt-8 grid max-w-lg gap-3">
            {[
              { icon: ShieldCheck, title: "Admin controls", detail: "Create projects, invite teammates, and manage access." },
              { icon: Users, title: "Member workspace", detail: "See assigned tasks, status, deadlines, and comments." },
              { icon: CheckCircle2, title: "Progress tracking", detail: "Dashboard metrics keep blockers visible." }
            ].map(({ icon: Icon, title, detail }) => (
              <div key={title} className="flex items-center gap-3 rounded-md border bg-card/75 p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium">{title}</p>
                  <p className="text-xs text-muted-foreground">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="flex justify-center lg:justify-end">{children}</div>
      </div>
    </main>
  );
}
