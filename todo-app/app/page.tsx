import { getTodos } from "@/api";
import AddTask from "./Components/AddTask";
import TodoList from "./Components/TodoList";

export default async function Home() {
const tasks = await getTodos();

  return (
    <main className="max-w-4xl mx-auto">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="font-bold text-3xl text-cyan-600">Todo App</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  )
}