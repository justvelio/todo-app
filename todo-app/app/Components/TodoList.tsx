import { ITask } from "@/types/tasks"

interface TodoListProps {
    tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr className="text-lg">
        <th>Task</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
        {tasks.map(task => (

            <tr key={task.id} className="hover">
        <td>{task.text}</td>
        <td>Blue</td>
      </tr>
          ))}
    </tbody>
  </table>
</div>
        </div>
    )
}

export default TodoList;