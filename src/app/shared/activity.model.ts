export interface IActivity{

    id:number;
    name:string;
    date:Date;
    comments?:string;//? mean optional property
    distance?:number;
    gpxData:string;
}