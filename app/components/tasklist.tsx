export default function TaskList() {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold">Today`s Tasks</h2>

      <ul className="mt-6 flex flex-col gap-4">
        <li className="bg-zinc-800 p-4 rounded-xl">Finish portfolio site</li>

        <li className="bg-zinc-800 p-4 rounded-xl">Apply to internships</li>

        <li className="bg-zinc-800 p-4 rounded-xl">Study React basics</li>
      </ul>
    </div>
  );
}
