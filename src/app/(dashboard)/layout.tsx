"use client";
import SideNav from "@/components/SideNav/SideNav";
import TopNav from "@/components/TopNav/TopNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="dashboard_container">
      <TopNav />
      <section className="dashboard_subcontainer ">
        <SideNav />
        <div className="dashboard_content">{children}</div>
      </section>
    </main>
  );
}
