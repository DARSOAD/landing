
"use client";
import { Button } from "@/src/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const RegForm = () => {
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
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="John Doe"
          {...register("example")}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="dashcode@gmail.com"
          {...register("example")}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="dashcode"
          {...register("exampleRequired", { required: true })}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Checkbox
            id="checkbox"
            defaultChecked
          />
          <Label htmlFor="checkbox">
            You Accept Our Terms And Conditions And Privacy Policy
          </Label>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Create An Account
      </Button>
    </form>
  );
};
export default RegForm;
