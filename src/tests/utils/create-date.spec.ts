import { expect, test } from "vitest";
import { createDate } from "./create-date";

test('Create past date', () => {
  const pastDate = createDate(-1)
  expect(pastDate.getTime()).toBe(new Date().getTime() - 1)
})

test('Create future date', () => {
  const pastDate = createDate(+1)
  expect(pastDate.getTime()).toBe(new Date().getTime() + 1)
})

test('Create date now', () => {
  const dateNow = createDate()
  expect(dateNow).toEqual(new Date())
})