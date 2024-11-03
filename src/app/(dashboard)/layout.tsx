import SideNav from "@/components/SideNav/SideNav";
import TopNav from "@/components/TopNav/TopNav";

export default function DashboardLayout() {
  return (
    <section className="dashboard_container">
      <TopNav />
      <section className="dashboard_subcontainer">
        <SideNav />
        <div>
          <p>i love my father</p>
        </div>
      </section>
    </section>
  );
}
