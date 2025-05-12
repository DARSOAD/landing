// src/components/partials/auth/login-form.tsx
"use client";
import React from 'react'
import { Button } from "@/src/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Link } from '@/src/i18n/routing';
import { Icon } from "@/src/components/ui/icon";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { cn } from "@/lib/utils"
import { Loader2 } from 'lucide-react';
import { loginUser } from '@/src/services/authService';
import { toast } from "sonner"
import { useRouter } from '@/src/components/navigation';

const schema = z.object({
  email: z.string().email({ message: "Your email is invalid." }),
  password: z.string().min(4),
});
const LoginForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const router = useRouter();
  const [passwordType, setPasswordType] = React.useState("password");


  const togglePasswordType = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else if (passwordType === "password") {
      setPasswordType("text");
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      email: "diegoanrora.rodriguez@hotmail.com",
      password: "1234567890",
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    startTransition(async () => {
      try {
        const response = await loginUser(data);

        if (!!response.error) {
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",

          })
        } else {
          router.push('/dashboard/analytics');
          toast.success("Successfully logged in");
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          toast.error(err.message);
        } else {
          toast.error("An unexpected error occurred.");
        }
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5 2xl:mt-7 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className=" font-medium text-default-600">
          Email{" "}
        </Label>
        <Input
          disabled={isPending}
          {...register("email")}
          type="email"
          id="email"
          className={cn("", {
            "border-destructive ": errors.email,
          })}
        />
      </div>
      {errors.email && (
        <div className=" text-destructive mt-2 text-sm">
          {errors.email.message}
        </div>
      )}

      <div className="mt-3.5 space-y-2">
        <Label htmlFor="password" className="mb-2 font-medium text-default-600">
          Password{" "}
        </Label>
        <div className="relative">
          <Input
            disabled={isPending}
            {...register("password")}
            type={passwordType}
            id="password"
            className="peer"
            placeholder=" "
          />

          <div
            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
            onClick={togglePasswordType}
          >
            {passwordType === "password" ? (
              <Icon icon="heroicons:eye" className="w-5 h-5 text-default-400" />
            ) : (
              <Icon
                icon="heroicons:eye-slash"
                className="w-5 h-5 text-default-400"
              />
            )}
          </div>
        </div>
      </div>
      {errors.password && (
        <div className=" text-destructive mt-2 text-sm">
          {errors.password.message}
        </div>
      )}

      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Checkbox id="checkbox" defaultChecked />
          <Label htmlFor="checkbox">Keep Me Signed In</Label>
        </div>
        <Link
          href="/auth/forgot-password"
          className="text-sm text-default-800 dark:text-default-400 leading-6 font-medium"
        >
          Forgot Password?
        </Link>
      </div>
      <Button className="w-full" disabled={isPending}>
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isPending ? "Loading..." : "Sign In"}
      </Button>
    </form>
  );
};
export default LoginForm;
