import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "tralalá", isCompleted: false },
    { id: 2, title: "Task 2", description: "tralalá2", isCompleted: false },
    { id: 3, title: "Task 3", description: "tralalá3", isCompleted: false },
    { id: 4, title: "Task 4", description: "tralalá4", isCompleted: false },
    { id: 5, title: "Task 5", description: "tralalá5", isCompleted: false },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
