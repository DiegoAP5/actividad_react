import styles from '../assets/css/Body.css'

function Body() {
    return (
        <div className={styles.bodyContainer}>
            <div className={styles.imgCarrousel}>
                <img src="https://images.unsplash.com/photo-1559133082-d15e8502d064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
            </div>

            <div className={styles.bodyDistributed}>
                <h1 className={styles.title}>Los mas populares</h1>
                <div className={styles.books}>
                    {                    }
                </div>

            </div>


            <div className={styles.bodyDistributed}>
                <h1 className={styles.title}>Lo nuevo</h1>
                <div className={styles.books}>
                    {                    }
                </div>
            </div>


        </div>
    )
}

export default Body;