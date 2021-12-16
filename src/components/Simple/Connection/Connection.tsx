import React, {memo} from 'react';
import classes from './Connection.module.scss';

interface IConnection {
    name?: string,
    icon?: string,
    connect?: boolean
}

const Connection = ({name, icon, connect}: IConnection) => {
    return (
        // <li className={classes['connection']}>
        //     <figure>
        //         <img
        //             src={icon
        //                 ? `https://app.subsocial.network/subid/icons/${icon}`
        //                 : `https://sistemaclub.ru/upload/nophoto.png`}
        //             alt={name}
        //             className={classes['connection__logo']}
        //         />
        //         <figcaption>{name}</figcaption>
        //     </figure>
        //     {
        //         connect
        //             ? <span className={classes['connection__active']}> <span></span> Active</span>
        //             : <span className={classes['connection__inactive']}><span></span> Inactive</span>
        //     }
        // </li>

        <div className={classes["connections__item"]}>
            <figure>
                <img
                    src={icon
                        ? `https://app.subsocial.network/subid/icons/${icon}`
                        : `https://sistemaclub.ru/upload/nophoto.png`}
                    alt={name}
                    className={classes['connection__logo']}
                />
            </figure>
            <h3>{name}</h3>
            {
                connect
                    ? <span className={classes['connections__item-active']}> <span></span> Active</span>
                    : <span className={classes['connections__item-inactive']}><span></span> Inactive</span>
            }
        </div>
    )
}

function connectionPropsAreEqual(prev: IConnection, next: IConnection) {
    return prev.connect === next.connect
}

export default memo(Connection, connectionPropsAreEqual);
