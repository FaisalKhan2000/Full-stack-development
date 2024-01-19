export default function Footer({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const percentage = Math.round((completedTasks / totalTasks) * 100);

  // Adding early return
  if (!totalTasks)
    return (
      <footer className="stats">
        What's the next task you'd like to add to your list? 😿
      </footer>
    );

  return (
    <footer className="stats">
      {percentage === 100
        ? "Congratulations! You've finished all your tasks for today. 🔥"
        : `You've completed ${completedTasks} out of ${totalTasks} tasks (${percentage}% complete). 🏃 `}
    </footer>
  );
}
