export async function tryToCatch(fn: Function, ...args: any): Promise<any> {
  try {
    return [null, await fn(...args)]
  } catch (error) {
    return [error, null]
  }
}