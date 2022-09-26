import { expect, test } from 'vitest'
import { Appointment } from './appointment'

test('Create an appointment' ,() => {
  const startsAt = new Date()
  const endsAt = new Date()

  startsAt.setMilliseconds(startsAt.getMilliseconds() + 1)
  endsAt.setMilliseconds(startsAt.getMilliseconds() + 2)

  const appointment: Appointment = new Appointment({
    customer: 'Leonardo Bazan',
    startsAt,
    endsAt
  })

  expect(appointment).instanceOf(Appointment)
  expect(appointment.customer).toBe('Leonardo Bazan')
})

test('Cannot create an appointment with starts date before now' ,() => {
  const startsAt = new Date()
  const endsAt = new Date()

  startsAt.setMilliseconds((new Date()).getMilliseconds() - 1)
  endsAt.setMilliseconds((new Date()).getMilliseconds() + 1)

  expect(() => {
    new Appointment({
      customer: 'Leonardo Bazan',
      startsAt,
      endsAt
    })
  }).toThrow()
})

test('Cannot create an appointment with ends date before or equal to starts date' ,() => {
  const startsAt = new Date()
  const endsDateBeforeStartsDate = new Date()
  const endsDateEqualToStartsDate = new Date()

  endsDateBeforeStartsDate.setMilliseconds(startsAt.getMilliseconds() - 1)

  expect(() => {
    new Appointment({
      customer: 'Leonardo Bazan',
      startsAt,
      endsAt: endsDateBeforeStartsDate
    })
  }).toThrow()

  expect(() => {
    new Appointment({
      customer: 'Leonardo Bazan',
      startsAt,
      endsAt: endsDateEqualToStartsDate
    })
  }).toThrow()
})