export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-12">
      <nav className="flex justify-between items-center mb-16">
        <h2 className="text-2xl font-bold">CF</h2>

        <div className="flex gap-6 text-white/70">
          <a href="/ ">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
          <a href="/resume">Resume</a>
        </div>
      </nav>
      <section className="max-w-5xl mx-auto">
        <p className="text-white/60 mb-3">Portfolio</p>

        <h1 className="text-5xl font-bold mb-4">Christian Forbes</h1>

        <p className="text-xl text-white/70 max-w-2xl mb-12">
          Informatics student focused on analytics, HCI, and human-centered
          technology.
        </p>

        <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
      </section>
    </main>
  );
}
