import { describe, expect, it } from "vitest";
import { Appointment } from "../entities/appointment";
import { CreateAppointment } from "./create-appointment";

describe('Create appointment', () => {
  it('should be able to create an appointment', () => {
    const createAppointment = new CreateAppointment()
    const startsAt = new Date()
    const endsAt = new Date()

    endsAt.setMilliseconds(startsAt.getMilliseconds() + 1)
    
    expect(createAppointment.execute({
      customer: 'Leonardo Bazan',
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Appointment)
  })
})