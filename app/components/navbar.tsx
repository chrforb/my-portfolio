export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold">Good Morning, Christian</h1>

        <p className="text-zinc-400 mt-2">
          Track your productivity and wellness.
        </p>
      </div>

      <button className="bg-white text-black px-4 py-2 rounded-xl">
        Add Task
      </button>
    </div>
  );
}
