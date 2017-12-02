import { Pipe, PipeTransform } from '@angular/core';
import { TodoDto } from '../dto/todo.dto';

@Pipe({
  name: 'offset'
})
export class OffsetPipe implements PipeTransform {

  public transform(value: Array<TodoDto>, offset: number, limit: number): Array<TodoDto> {
    return value.slice(offset, offset + limit);
  }

}
