import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/ui/sidebar";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-[100vh] w-[100%] bg-[rgb(243_243_243)]">
      <Sidebar />

      <div className="w-[80%] p-10">
        <Navbar />

        <div className="h-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
