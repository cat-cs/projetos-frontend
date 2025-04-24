import { ChevronRightIcon, Trash } from "lucide-react";

function Tasks({ tasks, onClickCheckTask, onClickDeleteTask }) {
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
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon /> {/* Icone detalhes*/}
          </button>
          <button
            onClick={() => onClickDeleteTask(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <Trash /> {/* Icone deletar*/}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
