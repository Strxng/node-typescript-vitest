import { describe, expect, it } from "vitest";
import { Appointment } from "../entities/appointment";
import { createDate } from "../tests/utils/create-date";
import { CreateAppointment } from "./create-appointment";

describe('Create appointment', () => {
  it('should be able to create an appointment', () => {
    const createAppointment = new CreateAppointment()
    const startsAt = createDate()
    const endsAt = createDate(1)

    expect(createAppointment.execute({
      customer: 'Leonardo Bazan',
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Appointment)
  })
})