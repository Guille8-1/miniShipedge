"use client"

import { PiHandPointingThin } from "react-icons/pi";
import { useEffect, useState } from "react";
import { getProjects } from "@/src/API/client-fetching-action";
import { ProjectTypes } from "@/src/schemas";
import { User } from "@/src/schemas";

import "dotenv";



export default function TableProject({user}: {user: User}) {
  const [projects, setProjects] = useState<ProjectTypes[]>([]);

  useEffect(() => {
    
    async function projectResources(userId: number) {
      const id = userId
      const projectsOk = await getProjects(id);
      setProjects(projectsOk);
    }

    projectResources(user.id);
  }, [user.id]);
  

  return (
    <>
      <div>
        {projects.length > 0 ? (
          user.admin ? (
            <section className="w-full h-auto">
              {projects.map((project) => (
                <div className="w-full h-auto" key={project.id}>
                  <h3>{project.titulo}</h3>
                </div>
              ))}
            </section>
          ) : (
            <section className="w-full h-auto">
              <h2>hello</h2>
              {
                projects
                .filter(
                  (projectFilter) => {
                    const userStandard = projectFilter.asignados
                    userStandard?.filter((userStd)=>
                    userStd === user.name)
                  }
                )
                .map((itemUser) => (
                  <div className="w-full h-auto" key={itemUser.id}>
                    <h3>{itemUser.titulo}</h3>
                  </div>
                ))}
            </section>
          )
        ) : (
          <section className="mt-8 flex flex-row gap-3">
            <PiHandPointingThin size="1.6em" className="text-sky-800" />
            <h3 className="font-semibold text-2xl">
              Comienza creando un nuevo proyecto..
            </h3>
          </section>
        )}
      </div>
    </>
  );
}

// [standardUser] = projects
                    // const currUser = standardUser.asignados

                    // currUser === user.name



                  //   <div className="w-full h-auto" key={itemUser.id}>
                  //   <h3>{itemUser.titulo}</h3>
                  // </div>