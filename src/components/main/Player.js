import Image from 'next/image';
import player from '../../images/wooglyboogly.png';

export default function Player({playerPos, playerRef}) {
    const playerWidth = playerRef.current?.getBoundingClientRect().width;
    const playerHeight = playerRef.current?.getBoundingClientRect().height;

    const playerStyle = {
        position: 'absolute',
        left: playerPos.x - playerWidth/2,
        top: playerPos.y - playerHeight/2,
        border: 'solid 1px black',
        transition: 'left 1s, top 1s',
        zIndex: 1,
    }

    return (
        <Image src={player} alt="the player" draggable="false" height={100} style={playerStyle} ref={playerRef} />
    );
}