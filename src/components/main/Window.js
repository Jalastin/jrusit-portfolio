import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/main/window.module.scss';
import Player from './Player';
import getOverlappingState from '../util/getOverlappingState';
import isOverlapping from '../util/isOverlapping';
import preventOverlap from '../util/preventOverlap';
import floor from '../../images/floor.png';

export default function Window({children}) {
    const [playerPos, setPlayerPos] = useState({x: 0, y: 0});
    const windowRef = useRef(null);
    const playerRef = useRef(null);

    // sets the player to where they currently are; band-aid over the bug where first click has no transition
    useEffect(() => {
        setPlayerPos({x: playerRef.current?.getBoundingClientRect().left + playerRef.current?.getBoundingClientRect().width/2, y: playerRef.current?.getBoundingClientRect().top + playerRef.current?.getBoundingClientRect().height/2});
    }, [playerRef]);
    
    // move player back in bounds of when window resizes
    useEffect(() => {
        const currentPlayer = playerRef.current;
        const currentWindow = windowRef.current;
        const repositionPlayer = () => {
            if (currentPlayer && currentWindow) {
                const currentPos = {x: playerRef.current?.getBoundingClientRect().left + playerRef.current?.getBoundingClientRect().width/2, y: playerRef.current?.getBoundingClientRect().top + playerRef.current?.getBoundingClientRect().height/2};
                const overlappingState = getOverlappingState(currentPos, playerRef.current?.getBoundingClientRect(), windowRef.current?.getBoundingClientRect());
                if (!isOverlapping(overlappingState)) {
                    const newPos = preventOverlap(currentPos, playerRef.current?.getBoundingClientRect(), windowRef.current?.getBoundingClientRect(), overlappingState);
                    setPlayerPos(newPos);
                }
            }
        };
    
        window.addEventListener('resize', repositionPlayer);
        repositionPlayer();
        return () => currentPlayer && currentWindow && window.removeEventListener('resize', repositionPlayer);
    }, [playerRef, windowRef]);

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
            <Player playerPos={playerPos} playerRef={playerRef} />
            <div className={styles.children}>
                {children}
            </div>
            <Image className={styles.floor} src={floor} alt="floor" />
        </div>
    );
}