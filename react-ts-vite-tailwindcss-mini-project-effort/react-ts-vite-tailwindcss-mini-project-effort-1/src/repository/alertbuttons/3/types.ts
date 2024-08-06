
export type AlertType =  'success' | 'warning' | 'info'

export interface AlertBtnprops{
    type:AlertType;
    message:string;
    onClick:() => void;
}