export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen border-r border-zinc-800 p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <nav className="flex flex-col gap-4 mt-10 text-zinc-400">
        <a href="#">Overview</a>
        <a href="#">Tasks</a>
        <a href="#">Habits</a>
        <a href="#">Insights</a>
      </nav>
    </div>
  );
}
