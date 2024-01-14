import { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/main/building.module.scss';
import door from '../../images/door.png';

export default function Building({src, alt}) {
    const [doorRightPos, setDoorRightPos] = useState(50);

    return (
        <div className={styles.building}>
            <Image src={src} alt={alt} height={200} ref={(el) => {setDoorRightPos(el?.getBoundingClientRect().width / 2);}} />
            <button style={{right: `calc(${doorRightPos}px - 14px)`}} className={styles.door}><Image src={door} alt="door" height={50} /></button>
        </div>
    )
}