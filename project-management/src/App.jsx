import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";



function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleSelectProject(id) {
    setProjectsState(PrevState => {
      return {
        ...PrevState,
        selectedProjectId: id,
      };
    });
  }
  function handleStartAddProject() {
    setProjectsState(PrevState => {
      return {
        ...PrevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(PrevState => {
      const projectId = Math.random();
      const newProject =  {
        ...projectData,
        id: projectId,
      };
      return {
        ...PrevState,
        selectedProjectId : undefined,
        projects: [...PrevState.projects, newProject]
      }
    })
  }

  function handleCancelAddProject() {
    setProjectsState(PrevState => {
      return {
        ...PrevState,
        selectedProjectId: undefined,
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)
  let content = <SelectedProject project={selectedProject} />
  if(projectsState.selectedProjectId === null ) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>

  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
     <ProjectSidebar onStartAddProject={handleStartAddProject} onSelectProject={handleSelectProject}
      projects={projectsState.projects}
       />
     {content}
    </main>
  );
}

export default App;
