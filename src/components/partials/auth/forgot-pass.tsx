"use client";

import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
type Inputs = {
  example: string;
  exampleRequired: string;
};
import { useForm, SubmitHandler } from "react-hook-form";
const ForgotPass = () => {
 const {
   register,
   handleSubmit,
   watch,
 } = useForm<Inputs>();
 const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
 console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          defaultValue="dashcode@gmail.com"
          {...register("example")}
          className="h-[48px] text-sm text-default-900 "
        />
      </div>

      <Button type="submit" className="w-full">
        Send recovery email
      </Button>
    </form>
  );
};

export default ForgotPass;
