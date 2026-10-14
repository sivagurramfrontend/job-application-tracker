import {useState} from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import StatsCard from './components/StatsCard'
import JobSearch from './components/JobSearch'
import JobCard from './components/JobCard'

const jobs = [
  {
    id: 1,
    title: 'React Developer',
    company: 'Example Company A',
    location: 'Hyderabad',
    url: 'https://example.com',
  },
  {
    id: 2,
    title: 'UI Developer',
    company: 'Example Company B',
    location: 'Remote',
    url: 'https://example.com',
  },
  {
    id: 3,
    title: 'Angular Developer',
    company: 'Example Company C',
    location: 'Bangalore',
    url: 'https://example.com',
  },
]

function App() {
  const [savedJobs, setSavedJobs] = useState([])
  return (
    <div className="min-h-screen bg-slate-100 md:flex">
      <Sidebar />

      <main className="min-w-0 flex-1 p-6 md:p-8">
        <Header />

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <StatsCard
            title="Applications"
            count={0}
            description="Jobs you've applied for"
          />

          <StatsCard
            title="Interviews"
            count={0}
            description="Interviews scheduled"
          />

          <StatsCard
            title="Offers"
            count={0}
            description="Job offers received"
          />

          <StatsCard
            title="Saved Jobs"
            count={savedJobs.length}
            description="Jobs to review later"
          />
        </div>
        <JobSearch />
<section className="mt-8">
  <h2 className="mb-4 text-xl font-bold text-slate-900">
    Job Opportunities
  </h2>

  <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
    {jobs.map((job) => (
      <JobCard
       key={job.id}
        job={job} 
        savedJobs={savedJobs}
        setSavedJobs={setSavedJobs}
/>
    ))}
  </div>
  
</section>
<section className="mt-8">
  <h2 className="mb-4 text-xl font-bold text-slate-900">
    Saved Jobs
  </h2>

  {savedJobs.length === 0 ? (
    <p className="text-slate-500">
      You haven't saved any jobs yet.
    </p>
  ) : (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {savedJobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          savedJobs={savedJobs}
          setSavedJobs={setSavedJobs}
        />
      ))}
    </div>
  )}
</section>
      </main>
    </div>
  )
}

export default App

