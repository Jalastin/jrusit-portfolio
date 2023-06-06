export default function getOverlappingState(playerPos, playerRect, windowRect, overlappingState) {
    let x = playerPos.x;
    let y = playerPos.y;

    if (overlappingState.left) {
        x = windowRect.left + (playerRect.width/2);
    } else if (overlappingState.right) {
        x = windowRect.right - (playerRect.width/2);
    }

    if (overlappingState.top) {
        y = windowRect.top + (playerRect.height/2);
    } else if (overlappingState.bottom) {
        y = windowRect.bottom - (playerRect.height/2);
    }

    return {x, y};
}