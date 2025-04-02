"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/src/API/client-fetching-action";
import { getProjectsUsers } from "@/src/API/client-fetching-action";
import { ProjectTypes } from "@/src/schemas";
import { User } from "@/src/schemas";

import { getColumns } from "@/components/projects/project-table/columns";
import { DataTable } from "@/components/projects/project-table/table-data";
import { ProjectModal } from "@/components/projects/project-table-modal/ProjectModal";

export default function TableProject({ user }: { user: User }) {
  const [projects, setProjects] = useState<ProjectTypes[]>([]);

  useEffect(() => {
    async function projectResources(userId: number) {
      const projectsOk = await getProjects(userId);
      const projectsAssigned = await getProjectsUsers(userId);
      setProjects(projectsOk);
      setProjects(projectsAssigned);
    }
    projectResources(user.id).then();
  }, [user.id]);

  const [selectedIndex, setSelectedIndex] = useState<ProjectTypes | null>(null);
  const columns = getColumns(setSelectedIndex)

  return (
    <>
      <div className="mx-auto my-10">
            <DataTable columns={columns} data={projects}></DataTable>
            <ProjectModal
                data={selectedIndex}
                onClose={()=> setSelectedIndex(null)}
            />
      </div>
    </>
  )
}
