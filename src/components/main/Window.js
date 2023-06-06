import { useState, useRef } from 'react';
import styles from '../../styles/main/window.module.scss';
import Player from './Player';
import getOverlappingState from '../util/getOverlappingState';
import isOverlapping from '../util/isOverlapping';
import preventOverlap from '../util/preventOverlap';

export default function Window({children}) {
    const [playerPos, setPlayerPos] = useState({x: 0, y: 0});
    const windowRef = useRef(null);
    const playerRef = useRef(null);

    const handleClick = (e) => {
        const overlappingState = getOverlappingState({x: e.clientX, y: e.clientY}, playerRef.current?.getBoundingClientRect(), windowRef.current?.getBoundingClientRect());

        if (isOverlapping(overlappingState)) {
            setPlayerPos({x: e.clientX, y: e.clientY});
        } else {
            const newPos = preventOverlap({x: e.clientX, y: e.clientY}, playerRef.current?.getBoundingClientRect(), windowRef.current?.getBoundingClientRect(), overlappingState);
            setPlayerPos(newPos);
        }
    }

    return (
        <div className={styles.container} ref={windowRef} onClick={handleClick}>
            {children}
            <Player playerPos={playerPos} playerRef={playerRef} />
        </div>
    );
}