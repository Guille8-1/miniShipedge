import { ProjectsActionsPage } from "@/components/projects/ProjectsActionsPage";
import { verifySession } from "@/src/auth/dal";
import { ProjectsFullArray } from "@/src/schemas";
import 'dotenv'

async function getProjects() { 
 const url = `${process.env.BACK_URL}/projects/available`
 
 const request = await fetch(url)
 const json = await request.json()
 
 const projects = ProjectsFullArray.parse(json)
 return projects
}

export default async function ProjectsPage() {
  const {user} = await verifySession()
  const projectsOk = await getProjects()

  return (
    <>
      <ProjectsActionsPage user={user} />
      <div>
        {projectsOk && <ul>
          {projectsOk.map((projectsOk) => (
            <li key={projectsOk.id}>{projectsOk.titulo}</li>
          ))}
        </ul>}
        <h3 className="mt-5 mx-auto font-semibold text-2xl">Crea un nuevo proyecto</h3>
      </div>
    </>
  );
}