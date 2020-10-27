export interface WidgetConfig {
    device?: {
        id: string;
        name: string;
    };
    imageText: string;
    imageText2: string;
    height: number;
    width: number;
    animationTimeInSeconds: number,
    animationAction: 'SCROLL UP'| 'SCROLL DOWN' | 'SCROLL LEFT' | 'SCROLL RIGHT' | 'FADE OUT' | 'FADE IN' | 'ROTATE' | 'SWAP';
    remainingImagePercentage: number;
    rotationInDegrees: number;
}