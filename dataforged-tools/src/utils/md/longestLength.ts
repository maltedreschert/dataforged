
/**
 * Given an array of objects, return the length of the longest object.
 * @param array - Array<T>
 * @returns The length of the longest string in the array.
 */
export function lengthOfLongest<T extends {length: number}> (array: T[]): number {
  return array.map(item => item.length).reduce((a, b) => a > b ? a : b)
}
