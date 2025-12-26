
function TranportPage() {
  return (
    <>
      <div className='text'><h1>Transport Status Page</h1>
        <div className="dashboard">
          <div className="main-items">
            <div className="stats-container">
              <div className="stats">
                {/* Map Rescue Information Object */}
                <h1>Transporter Information</h1>
              </div>
              <div className="name-content">
                {/* Map Notes */}
                <h1>Notes</h1>
              </div>
              <div className="name-content">
                {/* Map Data Details for Relay Information */}
                <h1>Realtime Information</h1>
              </div>
            </div>
            <div className="content">
              {/* Map Rescues with Status: Pending */}
              <h2>History Log</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TranportPage
