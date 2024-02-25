'use client'

import { ITask } from "@/types/tasks";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import TaskModal from "./TaskModal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false)
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text)

    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTodo({
          id: task.id,
          text: taskToEdit,
        });
        setOpenModalEdit(false);
        router.refresh();
      };

    const handleDeleteTask = async (id: string) => {
        await deleteTodo(id);
        setOpenModalDelete(false);
        router.refresh();
    }

  return (
    <tr className="hover" key={task.id}>
      <td>{task.text}</td>
      <td className="flex gap-5">
        <FiEdit onClick={() => setOpenModalEdit(true)} cursor={'pointer'} className="text-cyan-700" size={17}/>
        <TaskModal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
        <form onSubmit={handleSubmitEditTodo}>
          <h3 className="font-bold text-xl text-center">Edit task</h3>
          <div className="modal-action">
            <input
              value={taskToEdit}
              onChange={(e) => setTaskToEdit(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xl  border-gray-700"
            />
            <button className="btn bg-black" type="submit">
              Submit
            </button>
          </div>
        </form>
      </TaskModal>
        <FiTrash2 onClick={() => setOpenModalDelete(true)} cursor={'pointer'} className="text-red-500" size={17}/>
        <TaskModal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
            <h3 className="text-xl font-bold">Are you sure you want to delete this task?</h3>
            <div className="modal-action">
                <button onClick={() => handleDeleteTask(task.id)} className='btn bg-red-500'>Yes</button>
                <button className="btn" onClick={() => setOpenModalDelete(false)}>No</button>
                
            </div>
        
      </TaskModal>
      </td>
    </tr>
  );
};

export default Task;
