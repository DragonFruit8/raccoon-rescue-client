
function TriagePage() {
  return (
    <>
      <div className='text'><h1>Triage Page</h1></div>
      <div className="dashboard">
        <div className="main-items">
          <div className="stats-container">
          <div className="stats">
            {/* Map Rescue Information Object */}
            <h1>Rescue Information</h1>
          </div>
          <div className="name-content">
            {/* Map Notes */}
            <h1>Notes</h1>
          </div>
          <div className="name-content">
            {/* Map Data Details for Relay Information */}
            <h1>Data & Realtime Information</h1>
          </div>
          </div>
          <div className="content">
            {/* Map Rescues with Status: Pending */}
            <h2>Pending Rescues</h2>
          </div>
        </div>
      </div>
  </>
  )
}

export default TriagePage
