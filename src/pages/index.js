import Image from 'next/image';
import Navbar from "../components/main/Navbar";
import Window from "../components/main/Window";
import cafe from '../images/cafe.png'
import club from '../images/club.png';
import shop from  '../images/shop.png';

export default function Home() {
    return (
        <div>
            <Navbar/>
            <Window>
                <Image src={cafe} alt="cafe" height={200} />
                <Image src={club} alt="club" height={200} />
                <Image src={shop} alt="shop" height={200} />
            </Window>
        </div>
    );
}