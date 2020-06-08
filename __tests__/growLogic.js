import { plantGrowth } from "../utils/growLogic";

describe("utils/growLogic", () => {
  describe("plantGrown", () => {
    it("turns happy mood and 8 hours of sleep to 8 growth", () => {
      expect(plantGrowth("happy", 8)).toBe(8);
    });

    it("turns okay mood and 3 hours of sleep to 2 growth", () => {
      expect(plantGrowth("okay", 3)).toBe(2);
    });

    it("turns angry mood and 10 hours of sleep into 3 growth", () => {
      expect(plantGrowth("angry", 10)).toBe(3);
    });

    it("empty for type mood", () => {
      expect(() => {
        plantGrowth("", 8);
      }).toThrow("mood should not be empty");
    });

    it("incorrect type for sleep", () => {
      expect(() => {
        plantGrowth("sad", "3");
      }).toThrow("sleep should be of type int");
    });
  });
});
