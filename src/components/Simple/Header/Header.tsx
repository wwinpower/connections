import React from "react";
import classes from './Header.module.scss';
import cx from "classnames";
import {Button} from "../../UI/Button";

const Header = () => {
    return (
        <aside className={classes["aside-menu"]}>
            <div className={classes.logo}>
            <figure>
                <img src="./icons/logo.svg" alt=""/>
            </figure>
            </div>
            <nav>
                <ul className={classes["aside-list"]}>
                    <li className={cx(classes["aside-list__item"], classes.active)}>
                        <a href="">
                            <figure>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.5 11.5C5.90905 11.5 5.32389 11.3836 4.77792 11.1575C4.23196 10.9313 3.73588 10.5998 3.31802 10.182C2.90016 9.76412 2.56869 9.26804 2.34254 8.72208C2.1164 8.17611 2 7.59095 2 7C2 6.40905 2.1164 5.82389 2.34254 5.27792C2.56869 4.73196 2.90016 4.23588 3.31802 3.81802C3.73588 3.40016 4.23196 3.06869 4.77792 2.84254C5.32389 2.6164 5.90905 2.5 6.5 2.5C7.69347 2.5 8.83807 2.97411 9.68198 3.81802C10.5259 4.66193 11 5.80653 11 7C11 8.19347 10.5259 9.33807 9.68198 10.182C8.83807 11.0259 7.69347 11.5 6.5 11.5V11.5ZM7 21.5C5.80653 21.5 4.66193 21.0259 3.81802 20.182C2.97411 19.3381 2.5 18.1935 2.5 17C2.5 15.8065 2.97411 14.6619 3.81802 13.818C4.66193 12.9741 5.80653 12.5 7 12.5C8.19347 12.5 9.33807 12.9741 10.182 13.818C11.0259 14.6619 11.5 15.8065 11.5 17C11.5 18.1935 11.0259 19.3381 10.182 20.182C9.33807 21.0259 8.19347 21.5 7 21.5V21.5ZM17 11.5C16.4091 11.5 15.8239 11.3836 15.2779 11.1575C14.732 10.9313 14.2359 10.5998 13.818 10.182C13.4002 9.76412 13.0687 9.26804 12.8425 8.72208C12.6164 8.17611 12.5 7.59095 12.5 7C12.5 6.40905 12.6164 5.82389 12.8425 5.27792C13.0687 4.73196 13.4002 4.23588 13.818 3.81802C14.2359 3.40016 14.732 3.06869 15.2779 2.84254C15.8239 2.6164 16.4091 2.5 17 2.5C18.1935 2.5 19.3381 2.97411 20.182 3.81802C21.0259 4.66193 21.5 5.80653 21.5 7C21.5 8.19347 21.0259 9.33807 20.182 10.182C19.3381 11.0259 18.1935 11.5 17 11.5V11.5ZM17 21.5C15.8065 21.5 14.6619 21.0259 13.818 20.182C12.9741 19.3381 12.5 18.1935 12.5 17C12.5 15.8065 12.9741 14.6619 13.818 13.818C14.6619 12.9741 15.8065 12.5 17 12.5C18.1935 12.5 19.3381 12.9741 20.182 13.818C21.0259 14.6619 21.5 15.8065 21.5 17C21.5 18.1935 21.0259 19.3381 20.182 20.182C19.3381 21.0259 18.1935 21.5 17 21.5ZM6.5 9.5C7.16304 9.5 7.79893 9.23661 8.26777 8.76777C8.73661 8.29893 9 7.66304 9 7C9 6.33696 8.73661 5.70107 8.26777 5.23223C7.79893 4.76339 7.16304 4.5 6.5 4.5C5.83696 4.5 5.20107 4.76339 4.73223 5.23223C4.26339 5.70107 4 6.33696 4 7C4 7.66304 4.26339 8.29893 4.73223 8.76777C5.20107 9.23661 5.83696 9.5 6.5 9.5V9.5ZM7 19.5C7.66304 19.5 8.29893 19.2366 8.76777 18.7678C9.23661 18.2989 9.5 17.663 9.5 17C9.5 16.337 9.23661 15.7011 8.76777 15.2322C8.29893 14.7634 7.66304 14.5 7 14.5C6.33696 14.5 5.70107 14.7634 5.23223 15.2322C4.76339 15.7011 4.5 16.337 4.5 17C4.5 17.663 4.76339 18.2989 5.23223 18.7678C5.70107 19.2366 6.33696 19.5 7 19.5ZM17 9.5C17.663 9.5 18.2989 9.23661 18.7678 8.76777C19.2366 8.29893 19.5 7.66304 19.5 7C19.5 6.33696 19.2366 5.70107 18.7678 5.23223C18.2989 4.76339 17.663 4.5 17 4.5C16.337 4.5 15.7011 4.76339 15.2322 5.23223C14.7634 5.70107 14.5 6.33696 14.5 7C14.5 7.66304 14.7634 8.29893 15.2322 8.76777C15.7011 9.23661 16.337 9.5 17 9.5ZM17 19.5C17.663 19.5 18.2989 19.2366 18.7678 18.7678C19.2366 18.2989 19.5 17.663 19.5 17C19.5 16.337 19.2366 15.7011 18.7678 15.2322C18.2989 14.7634 17.663 14.5 17 14.5C16.337 14.5 15.7011 14.7634 15.2322 15.2322C14.7634 15.7011 14.5 16.337 14.5 17C14.5 17.663 14.7634 18.2989 15.2322 18.7678C15.7011 19.2366 16.337 19.5 17 19.5Z"
                                        fill="white"/>
                                </svg>
                                <figcaption>HOME</figcaption>
                            </figure>
                        </a>
                    </li>
                    <li className={classes["aside-list__item"]}>
                        <a href="">
                            <figure>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM14 6H10V4H14V6Z"
                                        fill="black"/>
                                </svg>
                                <figcaption>JOBS</figcaption>
                            </figure>
                        </a>
                    </li>
                    <li className={classes["aside-list__item"]}>
                        <a href="">
                            <figure>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.07307 10.634C7.38859 10.498 6.751 11.0512 6.751 11.7498V14.1126C6.751 14.5908 7.08386 14.9752 7.53393 15.144C8.38718 15.4628 9.00133 16.2879 9.00133 17.2537C9.00133 18.4961 7.99337 19.504 6.751 19.504C5.50863 19.504 4.50067 18.4961 4.50067 17.2537V5.62697C4.50067 5.00344 3.99903 4.5018 3.3755 4.5018H1.12517C0.501637 4.5018 0 5.00344 0 5.62697V17.2537C0 21.4496 3.84901 24.7642 8.20434 23.85C10.7547 23.3155 12.8128 21.2527 13.3473 18.707C14.163 14.8205 11.6127 11.3372 8.07307 10.634ZM9.79833 0.00113625C9.36701 -0.0223047 9.00133 0.319933 9.00133 0.751247V2.23272C9.00133 2.63121 9.31075 2.95939 9.70456 2.97814C15.7711 3.30631 20.6468 8.22892 20.9984 14.3001C21.0219 14.6939 21.35 15.0034 21.7438 15.0034H23.2488C23.6801 15.0034 24.0223 14.6377 23.9989 14.2064C23.6004 6.55523 17.4495 0.404321 9.79833 0.00113625ZM9.81239 4.5018C9.37639 4.46899 9.00133 4.81591 9.00133 5.2566V6.76151C9.00133 7.15532 9.30607 7.47881 9.69519 7.50694C13.2957 7.80229 16.1649 10.7043 16.4884 14.3142C16.5259 14.7033 16.8447 15.0034 17.2338 15.0034H18.7434C19.1794 15.0034 19.531 14.6283 19.4982 14.1923C19.1044 9.0306 14.9741 4.9003 9.81239 4.5018Z"
                                        fill="white"/>
                                </svg>
                                <figcaption>BLOG</figcaption>
                            </figure>
                        </a>
                    </li>
                    <li className={classes["aside-list__item"]}>
                        <a href="">
                            <figure>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM13 18H11V16H13V18ZM13 14H11V8H13V14ZM12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5Z"
                                        fill="white"/>
                                </svg>
                                <figcaption>ABOUT</figcaption>
                            </figure>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className={classes["aside-contact"]}>
                <div className={classes["aside-contact__body"]}>
                    <h3>Support 24/7</h3>
                    <p>Contact me at any time</p>

                    <Button className="orange">
                        <a href="https://t.me/winpower" target="_blank">Chat</a>
                    </Button>

                    <div className={classes["aside-contact__icon"]}>
                        <img src="./icons/contact.svg" alt=""/>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Header;