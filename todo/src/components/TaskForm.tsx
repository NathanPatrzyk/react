import {
  useEffect,
  useState,
  type ChangeEvent,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from "react";
import type { ITask } from "../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: Dispatch<SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
}

function TaskForm({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, difficulty };

      setTaskList!([...taskList, newTask]);

      setTitle("");
      setDifficulty(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "difficulty") {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form onSubmit={addTaskHandler} className="flex flex-col w-100 mx-auto">
      <div className="flex flex-col text-left">
        <label className="font-bold mb-2" htmlFor="title">
          Título:
        </label>
        <input
          onChange={handleChange}
          value={title}
          className="px-4 py-2 mb-3 border border-slate-900"
          type="text"
          name="title"
          placeholder="Título da tarefa"
        />
      </div>
      <div className="flex flex-col text-left">
        <label className="font-bold mb-2" htmlFor="difficulty">
          Dificuldade:
        </label>
        <input
          onChange={handleChange}
          value={difficulty}
          className="px-4 py-2 mb-3 border border-slate-900"
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
        />
      </div>
      <button
        className="cursor-pointer px-4 py-2 mb-12 border border-sky-400 bg-sky-400 transition-all duration-500 hover:border-sky-500 hover:bg-sky-500"
        type="submit"
      >
        {btnText}
      </button>
    </form>
  );
}

export default TaskForm;
