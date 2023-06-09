import { useState, useRef, useEffect } from 'react';
import styles from '../../styles/main/window.module.scss';
import Player from './Player';
import getOverlappingState from '../util/getOverlappingState';
import isOverlapping from '../util/isOverlapping';
import preventOverlap from '../util/preventOverlap';

export default function Window({children}) {
    const [playerPos, setPlayerPos] = useState({x: 0, y: 0});
    const windowRef = useRef(null);
    const playerRef = useRef(null);

    // sets the player to where they currently are; band-aid over the bug where first click has no transition
    useEffect(() => {
        setPlayerPos({x: playerRef.current?.getBoundingClientRect().left + playerRef.current?.getBoundingClientRect().width/2, y: playerRef.current?.getBoundingClientRect().top + playerRef.current?.getBoundingClientRect().height/2});
    }, [playerRef]);

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