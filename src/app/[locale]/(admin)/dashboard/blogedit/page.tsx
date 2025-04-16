import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";
import { useTranslations } from "next-intl";

const DashboardPage = () => {
  const t = useTranslations("AnalyticsDashboard");

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5 rounded-md shadow-sm font-sans text-sm text-foreground">
    {/* Nombre del proyecto */}
    <div className="space-y-1.5">
      <Label htmlFor="projectName">Project Name*</Label>
      <Input type="text" id="projectName" placeholder="Project name" />
    </div>
  
    {/* Sub título */}
    <div className="space-y-1.5">
      <Label htmlFor="subtitle">Sub Titulo</Label>
      <Input type="text" id="subtitle" placeholder="Management Dashboard" />
    </div>
  
    {/* Mensaje ocupa dos columnas */}
    <div className="space-y-1.5 col-span-2">
      <Label htmlFor="inputMessage">Message</Label>
      <Textarea
        id="inputMessage"
        placeholder="type here... maximum 30 characters"
        className="resize-none"
        maxLength={30}
      />
    </div>
  
    {/* Upload File baja y toma una columna */}
    <div className="space-y-1.5">
      <Label htmlFor="uploadFile">Upload File</Label>
      <Input id="uploadFile" type="file" multiple />
    </div>
  
    {/* Otro Upload File */}
    <div className="space-y-1.5">
      <Label htmlFor="uploadFile2">Upload File</Label>
      <Input id="uploadFile2" type="file" multiple />
    </div>
  
    {/* Botón en toda la fila */}
    <div className="col-span-2">
      <Button type="submit">Submit</Button>
    </div>
  </div>
 
  );
};

export default DashboardPage;
