import classes from './Connections.module.scss';
import {Connection} from "../Connection/index";
import React from "react";
import {IConnection} from "../../../types/connection";

interface IComponentConnections {
    connections: IConnection[]
}

const Connections = ({connections}: IComponentConnections) => {
    return (
        // <ul className={classes.connections}>
        //     {
        //         connections && connections.map(connection => <Connection
        //                 key={connection.name}
        //                 name={connection.data.name}
        //                 icon={connection.data.icon}
        //                 connect={connection.connect}
        //             />
        //         )
        //     }
        // </ul>
        <div className={classes["connections"]}>
            {
                connections && connections.map(connection => <Connection
                        key={connection.name}
                        name={connection.data.name}
                        icon={connection.data.icon}
                        connect={connection.connect}
                    />
                )
            }
        </div>
    )
}

export default Connections;
