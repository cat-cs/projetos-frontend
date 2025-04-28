import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TaskButton } from "./TaskButton";

function Tasks({ tasks, onClickCheckTask, onClickDeleteTask }) {
  const navigate = useNavigate();

  function onClickDetails(task) {
    const query = new URLSearchParams()
    query.set("title", task.title)
    query.set("description", task.description)

    navigate(
      `/task-description?${query.toString()}`
    );
  }

  return (
    <ul className="space-y-4 p-6 bg-indigo-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onClickCheckTask(task.id)}
            className={`bg-indigo-400 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <TaskButton
            onClick={() => onClickDetails(task)}
          >
            <ChevronRightIcon /> {/* Icone detalhes*/}
          </TaskButton>
          <TaskButton
            onClick={() => onClickDeleteTask(task.id)}
          >
            <Trash /> {/* Icone deletar*/}
          </TaskButton>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
