export class Todo{
    title?:string;
    desc?: string;
    active?: boolean;

    constructor(){
        this.active=false;
    }
}