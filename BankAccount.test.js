import { expect, test } from "vitest";
import BankAccount from "./BankAccount.js";

test("money can be deposited", () => {
  const account = new BankAccount();

  expect(account).toBeInstanceOf(BankAccount);
  expect(account.balance).toEqual(0);
  expect(account.isFrozen).toBeFalsy();

  account.deposit(1000);
  expect(account.balance).toEqual(1000);
});
