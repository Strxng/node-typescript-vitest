import { expect, test } from 'vitest'
import { createDate } from '../tests/utils/create-date'
import { Appointment } from './appointment'

test('Create an appointment' ,() => {
  const startsAt = createDate(1)
  const endsAt = createDate(2)

  const appointment: Appointment = new Appointment({
    customer: 'Leonardo Bazan',
    startsAt,
    endsAt
  })

  expect(appointment).instanceOf(Appointment)
  expect(appointment.customer).toBe('Leonardo Bazan')
})

test('Cannot create an appointment with starts date before now' ,() => {
  const startsAt = createDate(-1)
  const endsAt = createDate(1)

  expect(() => {
    new Appointment({
      customer: 'Leonardo Bazan',
      startsAt,
      endsAt
    })
  }).toThrow()
})

test('Cannot create an appointment with ends date before or equal to starts date' ,() => {
  const startsAt = createDate()
  const endsDateEqualToStartsDate = createDate()
  const endsDateBeforeStartsDate = createDate(-1)

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