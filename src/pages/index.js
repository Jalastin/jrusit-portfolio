import { useState, useRef, useEffect } from 'react';
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

    useEffect(() => {
        const floorRect = floorRef.current?.getBoundingClientRect();
        floorRect && setPlayerPos({x: floorRect.x + floorRect.width/2, y: floorRect.y + floorRect.height/2});
    }, [floorRef]);

    return (
        <>
            <Navbar/>
            <Window playerPos={playerPos} setPlayerPos={setPlayerPos} windowRef={windowRef} playerRef={playerRef} floorRef={floorRef} >
                <div className={styles.buildings}>
                    <Building src={cafe} alt="cafe" href="/cafe" />
                    <Building src={club} alt="club" href="/club" />
                    <Building src={shop} alt="shop" href="/shop" />
                </div>
                <Floor floorRef={floorRef} />
            </Window>
        </>
    );
}