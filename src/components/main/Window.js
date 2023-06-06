import { useState, useRef } from 'react';
import styles from '../../styles/main/window.module.scss';
import Player from './Player';

export default function Window({children}) {
    const [playerPos, setPlayerPos] = useState({x: 0, y: 0});
    const windowRef = useRef(null);
    const playerRef = useRef(null);

    const handleClick = (e) => {
        setPlayerPos({x: e.clientX, y: e.clientY});
    }

    console.log(windowRef);
    return (
        <div className={styles.container} ref={windowRef} onClick={handleClick}>
            {children}
            <Player playerPos={playerPos} playerRef={playerRef} />
        </div>
    );

    // const [windowArea, setWindowArea]

    // const renderWindow = () => {
    //     return (
            // <div className={styles.container}>
            //     {children}
            //     <Player/>
            // </div>
    //     );
    // }

    // return renderWindow();
}