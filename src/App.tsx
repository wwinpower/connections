import React from 'react';
import classes from './App.module.scss';
import {Status} from './containers/Status/index'
import {Header} from './components'

const App = () => {
    return (
        <>
            <main className={classes.wrapper}>
                <Header/>
                <Status />
            </main>
        </>
    )
}

export default App;
