import { useState } from 'react'

function JobSearch() {
  const [keyword, setKeyword] = useState('')
  const [location, setLocation] = useState('')
  const [searchCriteria, setSearchCriteria] = useState(null)

function handleSearch(event) {
  event.preventDefault()

  setSearchCriteria({
    keyword: keyword,
    location: location,
  })
}
  return (
    <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        Find Jobs
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Search for opportunities that match your skills.
      </p>

      <form
        onSubmit={handleSearch}
        className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        <input
          type="text"
          placeholder="Job title or skill"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
        >
          Search Jobs
        </button>
      </form>
      {searchCriteria && (
  <div className="mt-6 rounded-lg bg-blue-50 p-4">
    <h3 className="font-semibold text-slate-900">
      Search submitted
    </h3>

    <p className="mt-2 text-slate-600">
      Job title or skill: {searchCriteria.keyword || 'Any'}
    </p>

    <p className="mt-1 text-slate-600">
      Location: {searchCriteria.location || 'Any'}
    </p>
  </div>
)}
    </section>
  )
}

export default JobSearch