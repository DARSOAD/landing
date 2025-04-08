import { ReactNode } from "react";

// Providers de tu aplicación
// import LayoutProvider from "@/providers/layout.provider";
// import LayoutContentProvider from "@/providers/content.provider";

// // Componentes del layout
// import DashCodeHeader from "@/components/partials/header";
// import DashCodeSidebar from "@/components/partials/sidebar";
// import DashCodeFooter from "@/components/partials/footer";
// import ThemeCustomize from "@/components/partials/customizer";
import PageTitle from "@/components/page-title";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    // <LayoutProvider>
    //   <ThemeCustomize />
    //   <DashCodeHeader />
    //   <DashCodeSidebar />
    //   <LayoutContentProvider>
        <main className="p-6">
          <PageTitle className="mb-6" />
          {children}
         </main>
     /* </LayoutContentProvider>
      <DashCodeFooter />
    </LayoutProvider> */
  );
}
