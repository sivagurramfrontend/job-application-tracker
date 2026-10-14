function Sidebar() {
  return (
    <aside className="w-full bg-slate-900 p-6 text-white md:min-h-screen md:w-64">
      <h2 className="mb-8 text-xl font-bold">
        Job Tracker
      </h2>

      <nav>
        <ul className="space-y-3">
          <li className="cursor-pointer rounded-lg bg-blue-600 p-3">
            Dashboard
          </li>

          <li className="cursor-pointer rounded-lg p-3 hover:bg-slate-800">
            Applications
          </li>

          <li className="cursor-pointer rounded-lg p-3 hover:bg-slate-800">
            Interviews
          </li>

          <li className="cursor-pointer rounded-lg p-3 hover:bg-slate-800">
            Settings
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar