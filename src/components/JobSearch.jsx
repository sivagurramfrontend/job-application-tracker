
function JobSearch({ searchCriteria, setSearchCriteria }) {
  function handleKeywordChange(event) {
    setSearchCriteria({
      ...searchCriteria,
      keyword: event.target.value,
    })
  }

  function handleLocationChange(event) {
    setSearchCriteria({
      ...searchCriteria,
      location: event.target.value,
    })
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="mb-4 text-lg font-bold text-slate-900">
        Find Jobs
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <input
          type="text"
          placeholder="Job title or keyword"
          value={searchCriteria.keyword}
          onChange={handleKeywordChange}
          className="rounded-lg border border-slate-300 px-4 py-3"
        />

        <input
          type="text"
          placeholder="Location"
          value={searchCriteria.location}
          onChange={handleLocationChange}
          className="rounded-lg border border-slate-300 px-4 py-3"
        />

        <button
          type="button"
          onClick={() => setSearchCriteria(searchCriteria)}
          className="rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-700"
        >
          Search Jobs
        </button>
      </div>
    </section>
  )
}

export default JobSearch
