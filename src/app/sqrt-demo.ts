import { PipeTransform, Pipe } from '@angular/core';

@Pipe
({
    name:'sqrt'
})
export class SqrtDemo implements PipeTransform {
    transform(value:number):number
    {
        return Math.sqrt(value);
    }




}
