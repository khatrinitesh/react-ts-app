export interface AnimatedButtonProps{
    label:string;
    onClick:() => void;
    animation:'pulse' | 'bounce' | 'shake'
}

