import Form from "./Form";
import TasksList from "./TaskList";
export default function Main({
  tasks,
  onAddTasks,
  onToggleTask,
  onRemovingTask,
  onClearAll,
}) {
  return (
    <main>
      <Form onAddTasks={onAddTasks} />
      <TasksList
        tasks={tasks}
        onToggleTask={onToggleTask}
        onRemovingTask={onRemovingTask}
        onClearAll={onClearAll}
      />
    </main>
  );
}
