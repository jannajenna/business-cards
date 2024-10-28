//This need to be imported to make the validation work
import { IsNotEmpty } from "class-validator";

export class CreateCatDto{
    @IsNotEmpty()
    name: string;
    age:number;
    @IsNotEmpty()
    breed:string;
}

//What expected from the front end - add validation here