import { expect, it, vi } from "vitest";
import { purchaseItem } from "./purchaseItem.js";

it("Charges card only if balance is enough", () => {
  const mockChargeCard = vi.fn();

  purchaseItem(30, 70, mockChargeCard);
  expect(mockChargeCard).toHaveBeenCalled();

  purchaseItem(80, 20, mockChargeCard);
  expect(mockChargeCard).not.toHaveBeenCalledTimes(2);
});
