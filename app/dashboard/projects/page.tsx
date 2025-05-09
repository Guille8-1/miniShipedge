
import { ProjectsActionsPage } from "@/components/projects/ProjectsActionsPage";
import TableProject from "@/components/projects/project-table/table-project-data";
import { verifySession } from "@/src/auth/dal";
import "dotenv";


export default async function ProjectsPage() {
  const { user } = await verifySession();
  

  return (
    <>
        <section className="h-auto">
            <ProjectsActionsPage user={user}/>
            <TableProject user={user}/>
        </section>
    </>
  );
}
