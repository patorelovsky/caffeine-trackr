import { CaffeineIntake } from "../types/caffeineIntake";

const MOCK_DATA: CaffeineIntake[] = [
  {
    id: "1",
    date: 1704525704858,
    source: "Coffee",
    content: 100,
  },
  {
    id: "2",
    date: 1704535704858,
    source: "Tea",
    content: 50,
  },
  {
    id: "3",
    date: 1704545704858,
    source: "Energy Drink",
    content: 150,
  },
  {
    id: "4",
    date: 1704555704858,
    source: "Caffeine Pills",
    content: 200,
  },
];

export async function fetchIntakesAPI(): Promise<CaffeineIntake[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(MOCK_DATA), 2000);
  });
}
