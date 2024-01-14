import { useRef, useEffect } from 'react';
import styles from '../../styles/main/window.module.scss';
import Player from './Player';
import getOverlappingState from '../util/getOverlappingState';
import isOverlapping from '../util/isOverlapping';
import preventOverlap from '../util/preventOverlap';

export default function Window({children, playerPos, setPlayerPos, windowRef, playerRef, floorRef}) {
    // sets the player to where they currently are; band-aid over the bug where first click has no transition
    useEffect(() => {
        const playerRect = playerRef.current?.getBoundingClientRect();
        setPlayerPos({x: playerRect.left + playerRect.width/2, y: playerRect.top + playerRect.height/2});
    }, [playerRef, setPlayerPos]);
    
    // move player back in bounds of when window resizes
    useEffect(() => {
        const currentPlayer = playerRef.current;
        const currentWindow = windowRef.current;
        const repositionPlayer = () => {
            if (currentPlayer && currentWindow) {
                const playerRect = playerRef.current?.getBoundingClientRect();
                const windowRect = windowRef.current?.getBoundingClientRect();
                const currentPos = {x: playerRect.left + playerRect.width/2, y: playerRect.top + playerRect.height/2};
                const overlappingState = getOverlappingState(currentPos, playerRect, windowRect);
                if (!isOverlapping(overlappingState)) {
                    const newPos = preventOverlap(currentPos, playerRect, windowRect, overlappingState);
                    setPlayerPos(newPos);
                }
            }
        };
    
        window.addEventListener('resize', repositionPlayer);
        repositionPlayer();
        return () => currentPlayer && currentWindow && window.removeEventListener('resize', repositionPlayer);
    }, [playerRef, windowRef, setPlayerPos]);

    const stickToFloorTop = (pos) => {
        const playerRect = playerRef.current?.getBoundingClientRect();
        const floorRect = floorRef.current?.getBoundingClientRect();
        
        if (floorRect.top < pos.y - playerRect.height/2) {
            setPlayerPos(pos);
        } else {
            setPlayerPos({x: pos.x, y: floorRect.top - playerRect.height/2});
        }
    }

    const handleClick = (e) => {
        const playerRect = playerRef.current?.getBoundingClientRect();
        const windowRect = windowRef.current?.getBoundingClientRect();
        const overlappingState = getOverlappingState({x: e.clientX, y: e.clientY}, playerRect, windowRect);
        const newPos = isOverlapping(overlappingState) ? {x: e.clientX, y: e.clientY} : preventOverlap({x: e.clientX, y: e.clientY}, playerRect, windowRect, overlappingState);

        if (floorRef.current) {
            stickToFloorTop(newPos);
        } else {
            setPlayerPos(newPos);
        }
    }

    return (
        <div className={styles.container} ref={windowRef} onClick={handleClick}>
            <Player playerPos={playerPos} playerRef={playerRef} />
            {children}
        </div>
    );
}