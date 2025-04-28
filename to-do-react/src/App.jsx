import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [
      {
        id: 1,
        title: "Adicionar uma tarefa",
        description:
          "Escreva o título e descrição da tarefa e clique em adicionar.",
        isCompleted: false,
      },
      {
        id: 2,
        title: "Marcar como concluído",
        description: "Clique no título da tarefa para marcar como concluída.",
        isCompleted: false,
      },
      {
        id: 3,
        title: "Apagar uma tarefa",
        description: "Clique na lixeira para apagar uma tarefa da lista.",
        isCompleted: false,
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onClickCheckTask(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onClickDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onClickAddTask(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-indigo-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-indigo-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onClickAddTask={onClickAddTask} />
        <Tasks
          tasks={tasks}
          onClickCheckTask={onClickCheckTask}
          onClickDeleteTask={onClickDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
