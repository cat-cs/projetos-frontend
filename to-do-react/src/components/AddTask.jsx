import { useState } from "react";
import { Input } from "./Input";

function AddTask({ onClickAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-indigo-200 rounded-md shadow flex flex-col">
      <Input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="Digite o título da tarefa"
      />
      <Input
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        type="text"
        placeholder="Digite a descrição da tarefa"
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Preencha os campos vazios");
            return;
          }
          onClickAddTask(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
