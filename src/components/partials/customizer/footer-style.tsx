"use client";
import { useConfig } from "@/src/hooks/use-config";
import { cn } from "@/lib/utils";
import { Label } from "@/src/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";

const FooterStyle = () => {
  const [config, setConfig] = useConfig();

  const { footer } = config;

  return (
    <div className="-mx-6 p-6">
      <div className="text-sm font-medium mb-3">Footer Type</div>

      <RadioGroup
        defaultValue={footer}
        className="flex flex-wrap items-center gap-3"
        onValueChange={(value: "sticky" | "default" | "hidden") => {
          setConfig({ ...config, footer: value });
        }}

      >
        {["sticky", "hidden", "default"].map((value, index) => {
          return (
            <div className="flex items-center gap-2" key={index}>
              <RadioGroupItem className="cursor-pointer disabled:cursor-not-allowed" value={value} id={`footer-style-${value}`} disabled={config.layout === 'compact' && value !== 'sticky'} />
              <Label className={cn('capitalize cursor-pointer disabled:cursor-not-allowed', {
                'opacity-50 cursor-not-allowed': config.layout === 'compact' && value !== 'sticky'
              })} htmlFor={`footer-style-${value}`}>
                {value}
              </Label>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default FooterStyle;
