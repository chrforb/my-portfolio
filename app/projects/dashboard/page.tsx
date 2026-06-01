import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import StatCard from "../../components/statcard";
import ChartSection from "../../components/chartselection";
import TaskList from "../../components/tasklist";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <div className="flex-1 p-8">
        <Navbar />

        <section className="grid grid-cols-3 gap-6 mt-8">
          <StatCard title="Study Hours" value="12.5" />

          <StatCard title="Tasks Completed" value="18" />

          <StatCard title="Mood Score" value="8/10" />
        </section>

        <section className="mt-8">
          <ChartSection />
        </section>

        <section className="grid grid-cols-2 gap-6 mt-8">
          <TaskList />

          <div className="bg-zinc-900 rounded-2xl p-6">
            <h2 className="text-2xl font-bold">Habit Progress</h2>

            <div className="mt-6 flex flex-col gap-4">
              <div>
                <p className="mb-2">Sleep Schedule</p>

                <div className="w-full bg-zinc-800 rounded-full h-4">
                  <div className="bg-white h-4 rounded-full w-3/4"></div>
                </div>
              </div>

              <div>
                <p className="mb-2">Exercise</p>

                <div className="w-full bg-zinc-800 rounded-full h-4">
                  <div className="bg-white h-4 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
