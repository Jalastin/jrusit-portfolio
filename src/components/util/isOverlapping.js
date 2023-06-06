export default function getOverlappingState(overlappingState) {
    return !overlappingState.left && !overlappingState.right && !overlappingState.top && !overlappingState.bottom;
}