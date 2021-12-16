import classes from './Loading.module.scss';

const Loading = () => (
    <div className={classes.loading}>
        <div className={classes.boxes}>
            <div className={classes.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
)

export default Loading;
