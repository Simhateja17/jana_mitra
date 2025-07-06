/**
 * Sets the image position for a project card based on the provided position values
 * @param cardElement The project card DOM element
 * @param position Object containing position values (top, bottom, left, right)
 */
export function setProjectImagePosition(
    cardElement: HTMLElement,
    position: { top?: number; bottom?: number; left?: number; right?: number }
): void {
    if (!cardElement) return;

    // Convert position values to percentages
    const top = position.top !== undefined ? `${position.top}%` : undefined;
    const bottom = position.bottom !== undefined ? `${position.bottom}%` : undefined;
    const left = position.left !== undefined ? `${position.left}%` : undefined;
    const right = position.right !== undefined ? `${position.right}%` : undefined;

    // Set the custom properties based on the provided values
    if (top !== undefined) {
        cardElement.style.setProperty('--img-top', top);
    }
    if (bottom !== undefined && top === undefined) {
        cardElement.style.setProperty('--img-top', `${100 - Number(position.bottom)}%`);
    }
    if (left !== undefined) {
        cardElement.style.setProperty('--img-left', left);
    }
    if (right !== undefined && left === undefined) {
        cardElement.style.setProperty('--img-left', `${100 - Number(position.right)}%`);
    }
} 