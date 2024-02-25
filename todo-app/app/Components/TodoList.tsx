import { ITask } from "@/types/tasks";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table">
          <thead className="w-full">
            <tr className="text-lg">
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
