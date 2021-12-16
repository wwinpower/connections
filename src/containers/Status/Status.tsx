import React, {useEffect} from 'react';
import {IState} from '../../types/connection'
import classes from "./Status.module.scss";
import {Connections, Loading, Button} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {fetchAllConnection, fetchConnectionStatus} from "../../store/actions/ConnectionAction";
import {connectionStatusAdd} from '../../store/reducers/ConnectionReducer';

const Status: React.FC = () => {
    const {connection, isLoading, minute} = useSelector((state: { connection: IState }): RootState => state.connection);
    const dispatch = useDispatch();


    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        if (connection.length === 0) {
            dispatch(fetchAllConnection())
        } else {
            timer = setTimeout(() => {
                dispatch(fetchConnectionStatus(connection))
            }, 60000 * minute)
        }

        return () => clearTimeout(timer)
    }, [dispatch, connection])


    return (
        <section className={classes["page"]}>
            <article className={classes["page__container"]}>
                <div className={classes["container"]}>
                    <div className={classes["container__header"]}>
                        <h2>Connecting to networks: {connection.length}</h2>
                        <div className={classes["btn__group"]}>
                            <Button
                                onClick={() => dispatch(connectionStatusAdd())}
                            >TEST</Button>
                            <Button
                                className="orange"
                                onClick={() => dispatch(fetchConnectionStatus(connection))}
                            >Update</Button>
                        </div>
                    </div>
                    {
                        isLoading ? <Loading/> : connection.length > 0 && <Connections connections={connection}/>
                    }
                </div>
            </article>
        </section>
    )
}

export default Status;
