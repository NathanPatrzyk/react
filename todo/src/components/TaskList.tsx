import { Pencil, Trash } from "lucide-react";
import type { ITask } from "../interfaces/Task";

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
}

function TaskList({ taskList, handleDelete, handleEdit }: Props) {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div
            className="flex justify-between max-w-100 mx-auto border-b border-b-slate-500 p-4"
            key={task.id}
          >
            <div className="text-left">
              <h4 className="mb-4">{task.title}</h4>
              <p>{task.difficulty}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Pencil
                onClick={() => {
                  handleEdit(task);
                }}
                className="mb-2 p-2 text-white size-9 cursor-pointer bg-slate-900 transition-all duration-500 hover:text-sky-400"
              />
              <Trash
                onClick={() => {
                  handleDelete(task.id);
                }}
                className="mb-2 p-2 text-white size-9 cursor-pointer bg-slate-900 transition-all duration-500 hover:text-sky-400"
              />
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
}

export default TaskList;
