export const createDate = (milliseconds?: number): Date => {
  const dateNow = new Date()
  dateNow.setMilliseconds(dateNow.getMilliseconds() + (milliseconds || 0))
  return dateNow
}