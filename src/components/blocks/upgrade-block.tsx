
import { cn } from "@/lib/utils"

interface UpgradeProps {
  image?: string; // Use string for image URL or a more specific type if needed
  children: React.ReactNode;
  className?: string;
}
const UpgradeBlock = ({ children, className }: UpgradeProps) => {
  return (
    <div
      className={cn("p-6 relative bg-default-900  rounded-2xl", className)}
    >
      {children}
    </div>
  );
};


export { UpgradeBlock };