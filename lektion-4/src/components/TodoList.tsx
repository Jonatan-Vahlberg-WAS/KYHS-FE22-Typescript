import { useEffect } from "react"
import { Task, useLocalStorage, useTaskManager } from "../utils/hooks"


const TodoList = () => {
    const [getStoredTasks, setStoredTasks] = useLocalStorage<Task[]>("@LS_TODO_LIST")
    const {
        tasks,
        addTask,
        setInitialTasks,
    } = useTaskManager([])
    
    useEffect(() => {
        const storedTasks = getStoredTasks()
        setInitialTasks(storedTasks || [])
    },[])

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const input = event.target as typeof event.target & {
            taskTitle: HTMLInputElement;
          };
        const title = input.taskTitle.value;
        addTask(title, (newTasks) => {
            setStoredTasks(newTasks)
        });

        input.taskTitle.value = "";
      };
    
      return (
        <div>
          <h2>{"Todo list"}</h2>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <input type="checkbox" checked={task.completed} readOnly />
                {task.title}
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit}>
            <input name="taskTitle" type="text" placeholder="Lägg till en uppgift" />
            <button type="submit">Lägg till uppgift</button>
          </form>
        </div>
      );
}

export default TodoList;