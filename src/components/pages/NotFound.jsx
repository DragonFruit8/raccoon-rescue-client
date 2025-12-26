import { NavLink } from 'react-router'

function NotFound() {
  return (
     <div className='not-found'>
      <h1>Sorry <br/> Page Not Found <br/> : ( </h1>
        <NavLink to="/"><i class='bx  bx-arrow-big-left'></i>  Back to Dashboard</NavLink>
    </div>
  )
}

export default NotFound
