import { plantGrowth } from "../utils/growLogic";

describe("utils/growLogic", () => {
  describe("plantGrown", () => {
    it("turns 8 hours of goal and happy mood and 8 hours of sleep to 6 growth", () => {
      expect(plantGrowth(8, "happy", 10)).toBe(6);
    });

    it("turns 6 hours of goal and okay mood and 3 hours of sleep to 1 growth", () => {
      expect(plantGrowth(6, "okay", 2)).toBe(1);
    });

    it("turns 7 hours of goal and angry mood and 10 hours of sleep into 3 growth", () => {
      expect(plantGrowth(7, "angry", 4)).toBe(3);
    });

    it("empty for type mood", () => {
      expect(() => {
        plantGrowth(8, "", 8);
      }).toThrow("mood should not be empty");
    });

    it("incorrect type for sleep", () => {
      expect(() => {
        plantGrowth(8, "sad", "3");
      }).toThrow("sleep should be of type int");
    });
  });
});
