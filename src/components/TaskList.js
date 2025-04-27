import Task from "./Task";

function TaskList({ tasks, onTaskDelete }) {
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task
          key={task.id}
          text={task.text}
          category={task.category}
          onDelete={() => onTaskDelete(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;