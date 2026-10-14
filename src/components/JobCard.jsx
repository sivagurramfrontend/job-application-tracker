function JobCard({ job, savedJobs, setSavedJobs }) {
  const isSaved = savedJobs.some(
  (savedJob) => savedJob.id === job.id
)
function handleSaveJob() {
  if (isSaved) {
    setSavedJobs(
      savedJobs.filter((savedJob) => savedJob.id !== job.id)
    )
  } else {
    setSavedJobs([...savedJobs, job])
  }
}
    return (
    
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900">
        {job.title}
      </h3>

      <p className="mt-1 text-slate-600">
        {job.company}
      </p>

      <p className="mt-2 text-sm text-slate-500">
        {job.location}
      </p>

      <a
        href={job.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 mr-2 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        View Job 

      </a>
      <button
  onClick={handleSaveJob}
  className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
>
  {isSaved ? 'Saved ✓' : 'Save Job'}
</button>
    </div>
  )
}

export default JobCard