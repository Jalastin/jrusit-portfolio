export default function isOverlapping(overlappingState) {
    return !overlappingState.left && !overlappingState.right && !overlappingState.top && !overlappingState.bottom;
}