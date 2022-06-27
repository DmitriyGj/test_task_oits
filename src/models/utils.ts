export interface Buffer<T> {
  [name:string]: T
}

interface IGenerateParams {
  needClear: boolean, 
  count:number
}