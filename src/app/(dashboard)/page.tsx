import DashboardPageContent from "@/components/DasboardPageContent/DashboardPageContent";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense>
      <DashboardPageContent />
    </Suspense>
  );
};

export default Page;
