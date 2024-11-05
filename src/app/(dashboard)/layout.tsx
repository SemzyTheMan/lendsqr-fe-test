import SideNav from "@/components/SideNav/SideNav";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="dashboard_container">
      <section className="dashboard_subcontainer ">
        <SideNav />
        <div className="dashboard_content">{children}</div>
      </section>
    </main>
  );
}
