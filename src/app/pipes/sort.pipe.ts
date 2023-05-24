import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(values: Array<unknown>, propName: string): Array<any> {
    return values.sort((a, b) => {
      const i = a[propName].toUpperCase()
      const j = b[propName].toUpperCase()

      if (i < j) return -1

      if (i > j) return 1

      return 0
    })
  }
}
