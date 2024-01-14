import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";
import styles from '../../styles/main/building.module.scss';
import door from '../../images/door.png';
import doorOpen from '../../images/doorOpen.png'

export default function Building({src, alt, href}) {
    const [doorRightPos, setDoorRightPos] = useState(50);
    const [doorClosed, setDoorClosed] = useState(true);
    const router = useRouter();
    const handleClick = () => {
        setTimeout(() => {
            router.push(href);
        }, 1000)
    }

    return (
        <section className={styles.building}>
            {/* add sizes prop to the building here later to scale it depending on screen width */}
            <Image src={src} alt={alt} draggable="false" height={300} ref={(el) => {setDoorRightPos(el?.getBoundingClientRect().width / 2);}} />
            <button style={{right: `calc(${doorRightPos}px - 14px)`}} className={styles.door} onClick={handleClick}>
                <Image src={doorClosed ? door : doorOpen} alt="door" draggable="false" height={75} onMouseEnter={()=>{setDoorClosed(false)}} onMouseLeave={()=>{setDoorClosed(true)}} />
            </button>
        </section>
    )
}