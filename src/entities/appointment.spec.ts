import { expect, test } from 'vitest'
import { Appointment } from './appointment'

test('Create an appointment' ,() => {
  const startsAt = new Date()
  const endsAt = new Date()

  endsAt.setMilliseconds(startsAt.getMilliseconds() + 1)

  const appointment: Appointment = new Appointment({
    customer: 'Leonardo Bazan',
    startsAt,
    endsAt
  })

  expect(appointment).instanceOf(Appointment)
  expect(appointment.customer).toBe('Leonardo Bazan')
})

test('Cannot create an appointment with ends date before starts date' ,() => {
  const startsAt = new Date()
  const endsAt = new Date()

  endsAt.setMilliseconds(startsAt.getMilliseconds() - 1)

  expect(() => {
    new Appointment({
      customer: 'Leonardo Bazan',
      startsAt,
      endsAt
    })
  }).toThrow()
})