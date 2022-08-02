import { Email } from "./email";

export class User {
    id:number;
    name:string;
    gender:string;
    status:boolean;
    urlImage:string;
    emails:Email[];
}
