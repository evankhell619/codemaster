import { Outlet, Link } from "react-router-dom"


const ParentComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/child/1">Child 1</Link>
        <Link to="/child/2">Child 2</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
export default ParentComponent