import { useState, useRef } from 'react';
import Navbar from "../components/main/Navbar";
import Window from "../components/main/Window";

export default function Club() {
    const [playerPos, setPlayerPos] = useState({x: 0, y: 0});
    const windowRef = useRef(null);
    const playerRef = useRef(null);

    return (
        <div>
            <Navbar/>
            <Window playerPos={playerPos} setPlayerPos={setPlayerPos} windowRef={windowRef} playerRef={playerRef} >
                Club
            </Window>
        </div>
    );
}