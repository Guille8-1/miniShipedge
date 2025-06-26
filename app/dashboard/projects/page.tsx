
import TableProject from "@/components/projects/project-table/table-project-data";
import { ProjectsActionsPage } from "@/components/projects/ProjectsActionsPage";
import { ReportAction } from "@/components/projects/ReportAction";
import { verifySession } from "@/src/auth/dal";
import "dotenv";


export default async function ProjectsPage() {
  const { user } = await verifySession();
  

  return (
    <>
        <section className="h-auto">
            <section className='flex flex-row gap-5'>
                <ProjectsActionsPage user={user} />
                <ReportAction user={user} />
            </section>
            <TableProject user={user} />
        </section>
    </>
  );
}
