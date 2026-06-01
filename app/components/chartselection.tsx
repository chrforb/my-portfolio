export default function ChartSection() {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold">Weekly Productivity</h2>

      <div className="flex items-end gap-4 h-64 mt-8">
        <div className="bg-white w-10 h-24 rounded-t"></div>
        <div className="bg-white w-10 h-40 rounded-t"></div>
        <div className="bg-white w-10 h-32 rounded-t"></div>
        <div className="bg-white w-10 h-52 rounded-t"></div>
        <div className="bg-white w-10 h-28 rounded-t"></div>
      </div>
    </div>
  );
}
