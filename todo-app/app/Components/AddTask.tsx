"use client";

import { AiOutlinePlus } from "react-icons/ai";
import TaskModal from "./TaskModal";
import { FormEventHandler, useState } from "react";

export default function AddTask() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [taskValue, setTaskValue] = useState<string>("");

  const handleSubmitTodo: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setTaskValue('');
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full border-none text-center font-bold"
      >
        NEW TASK <AiOutlinePlus className="ml-1 mb-0.5" size={17} />
      </button>
      <TaskModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitTodo}>
          <h3 className="font-bold text-xl">Add new task</h3>
          <div className="modal-action">
            <input
              value={taskValue}
              onChange={(e) => setTaskValue(e.target.value)}
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
    </div>
  );
}
