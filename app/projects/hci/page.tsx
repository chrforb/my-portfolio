export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      {/* HERO */}
      <section className="max-w-5xl mx-auto">
        <p className="text-zinc-400 uppercase tracking-widest">
          Project Showcase
        </p>

        <h1 className="text-5xl font-bold mt-4">Project Title</h1>

        <p className="text-zinc-400 text-xl mt-6 max-w-3xl">
          Short one to two sentence description of the project and what it
          focuses on.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-white text-black px-5 py-3 rounded-xl">
            Live Demo
          </button>

          <button className="border border-zinc-700 px-5 py-3 rounded-xl">
            GitHub
          </button>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-5xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">Overview</h2>

        <p className="text-zinc-400 mt-6 leading-8">
          Explain what the project is, what it does, and why you created it.
        </p>
      </section>

      {/* GOAL / PROBLEM */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-3xl font-bold">Goal</h2>

        <p className="text-zinc-400 mt-6 leading-8">
          Describe the problem, challenge, or idea the project focuses on.
        </p>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-3xl font-bold">Features</h2>

        <ul className="mt-6 flex flex-col gap-4 text-zinc-400 list-disc pl-6">
          <li>Feature one</li>
          <li>Feature two</li>
          <li>Feature three</li>
          <li>Feature four</li>
        </ul>
      </section>

      {/* TECH STACK */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-3xl font-bold">Tech Stack</h2>

        <div className="flex flex-wrap gap-4 mt-6">
          <div className="bg-zinc-900 px-4 py-2 rounded-xl">React</div>

          <div className="bg-zinc-900 px-4 py-2 rounded-xl">Next.js</div>

          <div className="bg-zinc-900 px-4 py-2 rounded-xl">Tailwind CSS</div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-3xl font-bold">Process</h2>

        <p className="text-zinc-400 mt-6 leading-8">
          Explain your workflow, design process, development process, or how you
          approached the project.
        </p>
      </section>

      {/* CHALLENGES */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-3xl font-bold">Challenges & Learning</h2>

        <p className="text-zinc-400 mt-6 leading-8">
          Discuss what challenged you and what you learned while building the
          project.
        </p>
      </section>

      {/* SCREENSHOTS */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-3xl font-bold">Screenshots</h2>

        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="bg-zinc-900 rounded-2xl h-64"></div>

          <div className="bg-zinc-900 rounded-2xl h-64"></div>
        </div>
      </section>

      {/* FUTURE IMPROVEMENTS */}
      <section className="max-w-5xl mx-auto mt-20 pb-20">
        <h2 className="text-3xl font-bold">Future Improvements</h2>

        <ul className="mt-6 flex flex-col gap-4 text-zinc-400 list-disc pl-6">
          <li>Future improvement one</li>
          <li>Future improvement two</li>
          <li>Future improvement three</li>
        </ul>
      </section>
    </main>
  );
}
