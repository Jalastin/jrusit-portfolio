import { useState, useRef } from 'react';
import styles from '../styles/main/home.module.scss'
import Navbar from "../components/main/Navbar";
import Window from "../components/main/Window";
import Building from '../components/main/Building';
import Floor from '../components/main/Floor';
import cafe from '../images/cafe.png'
import club from '../images/club.png';
import shop from  '../images/shop.png';

export default function Home() {
    const [playerPos, setPlayerPos] = useState({x: 0, y: 0});
    const windowRef = useRef(null);
    const playerRef = useRef(null);
    const floorRef = useRef(null);

    return (
        <>
            <Navbar/>
            <Window playerPos={playerPos} setPlayerPos={setPlayerPos} windowRef={windowRef} playerRef={playerRef} floorRef={floorRef} >
                <div className={styles.buildings}>
                    <Building src={cafe} alt="cafe" />
                    <Building src={club} alt="club" />
                    <Building src={shop} alt="shop" />
                </div>
                <Floor floorRef={floorRef} />
            </Window>
        </>
    );
}