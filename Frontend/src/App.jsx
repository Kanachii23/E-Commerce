import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <section className="flex flex-col gap-3 flex-1 min-h-0">
        <SidebarTrigger />
        <Outlet />
      </section>
    </SidebarProvider>
  );
}

export default App;