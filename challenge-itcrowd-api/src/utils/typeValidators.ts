import { Types } from 'mongoose'

const isString = (value: any): boolean => typeof value === 'string'
const isNumber = (value: any): boolean => typeof value === 'number'

export const parseStrings = (value: any, name: string): string => {
  if (!isString(value)) throw new TypeError(`${name} must be a string`)
  return value
}

export const parseNumbers = (value: any, name: string): number => {
  if (!isNumber(value)) throw new TypeError(`${name} must be a number`)
  return value
}

export const parseIds = (id: any, name: string): Types.ObjectId => {
  if (!Types.ObjectId.isValid(id)) throw new TypeError(`${name} must be a ObjectId type`)
  return id
}
