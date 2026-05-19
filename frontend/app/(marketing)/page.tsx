"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarClock,
  CheckCircle2,
  FolderKanban,
  type LucideIcon,
  ShieldCheck,
  Users
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projectRows = [
  { name: "Mobile launch", owner: "Admin", progress: 84, color: "bg-primary" },
  { name: "Billing cleanup", owner: "Member", progress: 61, color: "bg-amber-400" },
  { name: "API handoff", owner: "Admin", progress: 42, color: "bg-rose-400" }
];

const tasks = [
  ["Todo", "Invite QA team", "Medium"],
  ["In progress", "Role audit", "High"],
  ["Review", "Dashboard copy", "Urgent"],
  ["Done", "Project schema", "Low"]
];

const featureTiles: Array<{ icon: LucideIcon; title: string; detail: string }> = [
  { icon: ShieldCheck, title: "RBAC-ready", detail: "Admin and Member flows" },
  { icon: Users, title: "Team spaces", detail: "Project memberships" },
  { icon: CalendarClock, title: "Deadline view", detail: "Overdue work visible" },
  { icon: BarChart3, title: "Progress data", detail: "Status and priority charts" }
];

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <section className="dashboard-grid relative flex min-h-[calc(100vh-4rem)] flex-col">
        <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <CheckCircle2 className="h-5 w-5" />
            </span>
            <span className="font-semibold">TeamTask</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Start free</Link>
            </Button>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-4 pb-12 pt-8 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <Badge variant="outline" className="mb-5 border-primary/35 bg-background/55 text-primary backdrop-blur">
              Role-based project delivery
            </Badge>
            <h1 className="text-balance text-5xl font-semibold leading-tight md:text-7xl">TeamTask</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              Create projects, invite teammates, assign work, and track progress from one calm workspace built for Admin and Member access.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Create workspace
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-background/60 backdrop-blur" asChild>
                <Link href="/login">Use demo login</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="pointer-events-none absolute bottom-[-7rem] right-[-3rem] hidden w-[58rem] max-w-[70vw] lg:block"
          aria-hidden="true"
        >
          <div className="app-surface rounded-lg border">
            <div className="flex h-12 items-center justify-between border-b px-4">
              <div className="flex items-center gap-2">
                <FolderKanban className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Operations Dashboard</span>
              </div>
              <div className="flex gap-2">
                <Badge variant="success">Live</Badge>
                <Badge variant="outline">Admin view</Badge>
              </div>
            </div>
            <div className="grid gap-4 p-4 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="space-y-3">
                {projectRows.map((project) => (
                  <div key={project.name} className="rounded-md border bg-background/72 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">{project.name}</p>
                        <p className="text-xs text-muted-foreground">{project.owner} permissions</p>
                      </div>
                      <span className="text-sm text-primary">{project.progress}%</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
                      <div className={`h-full rounded-full ${project.color}`} style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {tasks.map(([status, title, priority]) => (
                  <div key={title} className="min-h-36 rounded-md border bg-background/72 p-4">
                    <p className="text-xs text-muted-foreground">{status}</p>
                    <p className="mt-3 text-sm font-medium">{title}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <Badge variant={priority === "Urgent" ? "danger" : priority === "High" ? "warning" : "secondary"}>
                        {priority}
                      </Badge>
                      <div className="flex -space-x-2">
                        <span className="h-7 w-7 rounded-full border border-card bg-primary" />
                        <span className="h-7 w-7 rounded-full border border-card bg-amber-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="border-t bg-background/85 px-4 py-8 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-4">
          {featureTiles.map(({ icon: Icon, title, detail }) => (
            <div key={title} className="flex items-center gap-3 rounded-md border bg-card/70 p-4">
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
    </main>
  );
}
