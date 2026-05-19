"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { register } from "@/lib/api/auth";
import { useAuthStore } from "@/lib/stores/auth-store";
import { signupSchema, type SignupInput } from "@/lib/validations/auth";

export default function SignupPage() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);
  const form = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "" }
  });

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      setAuth({ user: data.user, access: data.access, refresh: data.refresh });
      toast.success("Workspace account created");
      router.replace("/dashboard");
    },
    onError: (error) => toast.error(error.message)
  });

  return (
    <Card className="app-surface w-full max-w-md">
      <CardHeader>
        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Sparkles className="h-5 w-5" />
        </div>
        <CardTitle>Create workspace account</CardTitle>
        <CardDescription>Start a focused workspace for your team.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={form.handleSubmit((values) => mutation.mutate(values))}>
          <div>
            <label className="mb-2 block text-xs font-medium text-muted-foreground" htmlFor="name">
              Full name
            </label>
            <Input id="name" placeholder="Full name" autoComplete="name" {...form.register("name")} />
            {form.formState.errors.name && <p className="mt-1 text-xs text-red-300">{form.formState.errors.name.message}</p>}
          </div>
          <div>
            <label className="mb-2 block text-xs font-medium text-muted-foreground" htmlFor="email">
              Email
            </label>
            <Input id="email" type="email" placeholder="Email" autoComplete="email" {...form.register("email")} />
            {form.formState.errors.email && <p className="mt-1 text-xs text-red-300">{form.formState.errors.email.message}</p>}
          </div>
          <div>
            <label className="mb-2 block text-xs font-medium text-muted-foreground" htmlFor="password">
              Password
            </label>
            <Input id="password" type="password" placeholder="Password" autoComplete="new-password" {...form.register("password")} />
            {form.formState.errors.password && <p className="mt-1 text-xs text-red-300">{form.formState.errors.password.message}</p>}
          </div>
          <Button className="w-full" disabled={mutation.isPending}>
            {mutation.isPending && <Loader2 className="h-4 w-4 animate-spin" />}
            Create account
          </Button>
        </form>
        <p className="mt-5 text-center text-sm text-muted-foreground">
          Already have access?{" "}
          <Link className="text-primary hover:underline" href="/login">
            Login
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
