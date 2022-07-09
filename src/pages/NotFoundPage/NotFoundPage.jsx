import {NavLink} from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <main>
            <div className="container">
                <NavLink to='/'>Back to home page</NavLink>
                <h1> 404 Page Not Found</h1>
            </div>
        </main>
    )
}

export default NotFoundPage;