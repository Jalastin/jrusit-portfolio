import Image from 'next/image';
import styles from '../../styles/main/floor.module.scss'
import floor from '../../images/floor.png';

export default function Floor({floorRef}) {
    return (
        <Image className={styles.floor} src={floor} alt="floor" draggable="false" ref={floorRef} />
    );
}