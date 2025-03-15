"use client";

import { PiHandPointingThin } from "react-icons/pi";
import { useEffect, useState } from "react";
import { getProjects } from "@/src/API/client-fetching-action";
import { ProjectTypes } from "@/src/schemas";
import { User } from "@/src/schemas";

export default function TableProject({ user }: { user: User }) {
  const [projects, setProjects] = useState<ProjectTypes[]>([]);

  useEffect(() => {
    async function projectResources(userId: number) {
      const id = userId;
      const projectsOk = await getProjects(id);
      setProjects(projectsOk);
    }

    projectResources(user.id);
  }, [user.id]);

  //tabla de proyectos


  return (
    <>
      <div>
        {projects.length > 0 ? (
          
          <section className="w-full h-auto mt-10">
            {projects.map((project) => (
              <div className="w-full h-auto" key={project.id}>
                <h3>{project.titulo}</h3>
              </div>
            ))}
          </section>
        ) : (
          <section className="mt-10 flex flex-row gap-3">
            <PiHandPointingThin size="1.6em" className="text-sky-800" />
            <h3 className="font-semibold text-2xl">
              Comienza creando un nuevo proyecto...
            </h3>
          </section>
        )}
      </div>
    </>
  )
}
