export const createDate = (days?: number): Date => {
  const dateNow = new Date()
  dateNow.setDate(dateNow.getDate() + (days || 0))
  return dateNow
}