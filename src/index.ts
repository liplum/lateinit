export type Init<T> = () => T
export type Get<T> = () => T

const _empty = {}

const lateinit = <T>(init: Init<T>): Get<T> => {
  let _instance: any = _empty
  return () => {
    if (_instance === _empty) {
      _instance = init()
    }
    return _instance
  }
}

export default lateinit
