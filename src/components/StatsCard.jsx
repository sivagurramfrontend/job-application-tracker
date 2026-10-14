function StatsCard({ title, count, description }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h3 className="text-sm font-medium text-slate-500">
        {title}
      </h3>

      <p className="mt-3 text-3xl font-bold text-slate-900">
        {count}
      </p>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>
    </div>
  )
}

export default StatsCard