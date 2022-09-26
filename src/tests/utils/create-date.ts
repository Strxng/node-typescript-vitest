export const createDateNow = (): Date => {
  return new Date()
}

export const createDate = (milliseconds: number): Date => {
  const dateNow = new Date()
  dateNow.setMilliseconds(dateNow.getMilliseconds() + milliseconds)
  return dateNow
}