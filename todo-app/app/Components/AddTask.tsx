"use client";

import { AiOutlinePlus } from "react-icons/ai";
import TaskModal from "./TaskModal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

export default function AddTask() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [taskValue, setTaskValue] = useState<string>("");

  const handleSubmitTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4,
      text: taskValue,
    });
    setTaskValue("");
    setModalOpen(false);
    router.refresh();
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
