    // give pipe.ts 

    import { Pipe, PipeTransform } from "@angular/core";

    @Pipe({name: 'titleTransform'})
    export class TitleTransformPipe implements PipeTransform{
        transform(value:any, ...args: any[]){
            // console.log('value', value )
            if (value === 'shoulderbags'){ // javascript triple = 
                return 'Shoulder Bags'
            } else if (value ==='designerbags'){
                return 'Designer Bags'
            }
            
            return 
        }
        
    }   