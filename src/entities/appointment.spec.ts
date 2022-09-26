import { expect, test } from 'vitest'
import { Appointment } from './appointment'

test('Create an appointment' ,() => {
  const appointment: Appointment = new Appointment({
    customer: 'Leonardo Bazan',
    startsAt: new Date(),
    endsAt: new Date()
  })

  expect(appointment).instanceOf(Appointment)
  expect(appointment.customer).toBe('Leonardo Bazan')
})