import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";
import { useTranslations } from "next-intl";

const DashboardPage = () => {
  const t = useTranslations("AnalyticsDashboard");

  return (
    <div className="p-6 grid  gap-5 rounded-md shadow-sm font-sans text-sm text-foreground space-y-6">
      {/* Nombre del proyecto */}
      <div className="space-y-1.5">
        <Label htmlFor="projectName">Project Name*</Label>
        <Input
          type="text"
          id="projectName"
          placeholder="Management Dashboard"
        />
      </div>

      {/* Mensaje */}
      <div className="space-y-1.5">
        <Label htmlFor="inputMessage">Message</Label>
        <Textarea
          id="inputMessage"
          placeholder="type here... maximum 30 characters"
          className="resize-none"
          maxLength={30}
        />
      </div>

      {/* Upload de múltiples archivos */}
      <div className="space-y-1.5">
        <Label htmlFor="uploadFile">Upload File</Label>
        <Input
          id="uploadFile"
          type="file"
          multiple
        />
      </div>
    </div>
  );
};

export default DashboardPage;
