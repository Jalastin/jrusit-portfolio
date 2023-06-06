export default function getOverlappingState(playerPos, playerRect, windowRect) {
    const overlappingState = { left: false, right: false, top: false, bottonm: false }

    if (windowRect.left > playerPos.x - playerRect.width/2) {
        overlappingState.left= true;
    }

    if (windowRect.right < playerPos.x + playerRect.width/2) {
        overlappingState.right = true;
    }

    if (windowRect.top > playerPos.y - playerRect.height/2) {
        overlappingState.top = true;
    }

    if (windowRect.bottom < playerPos.y + playerRect.height/2) {
        overlappingState.bottom = true;
    }

    return overlappingState;
}