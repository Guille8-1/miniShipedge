"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/src/API/client-fetching-action";
import { getProjectsUsers } from "@/src/API/client-fetching-action";
import { ProjectTypes } from "@/src/schemas";
import { ProjectArrayType } from '@/src/schemas';
import { User } from "@/src/schemas";

import { getColumns } from "@/components/projects/project-table/columns";
import { DataTable } from "@/components/projects/project-table/table-data";
import { ProjectModal } from "@/components/projects/project-table-modal/ProjectModal";
import {useSelector} from "react-redux";
import { RootState } from "@/src/Store/valueSlice";

export default function TableProject({ user }: { user: User }) {
  const [projects, setProjects] = useState<ProjectTypes[]>([]);
  const reFetch = useSelector((state: RootState) => state.value.value);

  useEffect(() => {
    async function projectResources(userId: number) {
      const projectsOk = await getProjects(userId);
      const projectsAssigned = await getProjectsUsers(userId);
      const jointProjects = projectsOk.concat(projectsAssigned);
      const noRepeatId = (uniqueProjects: ProjectArrayType) => {
          const seenIds = new Set();
          return uniqueProjects.filter((project)=> {
              if(seenIds.has(project.id)) return false;
              seenIds.add(project.id);
              return true;
          })
      }
      const uniqueProjects = noRepeatId(jointProjects)
      setProjects(uniqueProjects);
    }
    projectResources(user.id).then();
    console.log('testing comments pull')
  }, [user.id, reFetch]);

  const [selectedIndex, setSelectedIndex] = useState<ProjectTypes | null>(null);
  const columns = getColumns(setSelectedIndex)

  return (
    <>
      <div className="mb-5">
            <DataTable columns={columns} data={projects}></DataTable>
            <ProjectModal
                data={selectedIndex}
                onClose={()=> setSelectedIndex(null)}
            />
      </div>
    </>
  )
}
