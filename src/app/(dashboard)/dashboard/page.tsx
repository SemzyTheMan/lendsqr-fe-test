import DashboardPageContent from "@/components/Dashboard/DasboardPageContent/DashboardPageContent";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense>
      <DashboardPageContent />
    </Suspense>
  );
};

export default Page;
