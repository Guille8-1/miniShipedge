
import { ProjectsActionsPage } from "@/components/projects/ProjectsActionsPage";
import { verifySession } from "@/src/auth/dal";
import TableProject from "@/components/projects/project-table/table-project-data";
import "dotenv";


export default async function ProjectsPage() {
  const { user } = await verifySession();
  

  return (
    <>
      <ProjectsActionsPage user={user}/>
      <TableProject user={user}/>
    </>
  );
}
