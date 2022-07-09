import Movies from 'module/Movies';

import styles from './homePage.module.css'

const HomePage = () => {
    return (
        <main>
            <div className='container'>
                <h2>Trending today:</h2>
                <Movies />
            </div>
        </main>
    )
}

export default HomePage;