import { PipeTransform, Pipe } from 'angular2/core';
import { IConsultant } from './consultant';

@Pipe ({
    name: 'consultantFilter'
})
export class ConsultantFilterPipe implements PipeTransform {
    
    transform(value: IConsultant[], args: string[]): IConsultant[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((consultant: IConsultant) =>
            consultant.consultantTitle.toLocaleLowerCase().indexOf(filter) != -1) : value;
            
    }
}