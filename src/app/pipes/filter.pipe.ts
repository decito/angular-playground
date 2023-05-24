import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(
    values: Array<unknown>,
    filter: string,
    valProp: string
  ): Array<unknown> {
    if (values.length === 0 || !filter || !valProp) return values

    const resultArray = []

    for (const item of values) {
      if (item[valProp] === filter) resultArray.push(item)
    }

    return resultArray
  }
}
