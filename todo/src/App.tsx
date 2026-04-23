import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import type { ITask } from "./interfaces/Task";
import Modal from "./components/Modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      }),
    );
  };

  const hideOrShowModal = (display: boolean): void => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hidden");
    } else {
      modal!.classList.add("hidden");
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updatedTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);

    hideOrShowModal(false);
  };

  return (
    <div>
      <Modal>
        <TaskForm
          btnText="Editar Tarefa"
          taskList={taskList}
          task={taskToUpdate}
          handleUpdate={updatedTask}
        />
      </Modal>
      <Header />
      <main className="min-h-[70vh] text-center p-8">
        <div>
          <h2 className="mb-3">O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2 className="mb-3">Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
