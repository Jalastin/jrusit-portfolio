import Image from 'next/image';
import styles from '../styles/main/home.module.scss'
import Navbar from "../components/main/Navbar";
import Window from "../components/main/Window";
import Building from '../components/main/Building';
import cafe from '../images/cafe.png'
import club from '../images/club.png';
import shop from  '../images/shop.png';
import floor from '../images/floor.png';

export default function Home() {
    return (
        <div>
            <Navbar/>
            <Window>
                <div className={styles.buildings}>
                    <Building src={cafe} alt="cafe" />
                    <Building src={club} alt="club" />
                    <Building src={shop} alt="shop" />
                </div>
                <Image className={styles.floor} src={floor} alt="floor" />
            </Window>
        </div>
    );
}