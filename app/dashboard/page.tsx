import { verifySession } from "@/src/auth/dal";
import DashboardStart from "@/components/dashboard/MainDashboard";

export default async function DashboardMain() {
  const { user } = await verifySession();

  return (
    <>
      <DashboardStart user={user} />
    </>
  );
}
