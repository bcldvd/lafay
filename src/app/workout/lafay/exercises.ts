export const exercises: Exercise[] = [
  {
    id: 0,
    name: 'A',
    image: 'assets/exercises/A.png'
  },
  {
    id: 1,
    name: 'A1',
    image: 'assets/exercises/A1.png'
  },
  {
    id: 2,
    name: 'B',
    image: 'assets/exercises/B.png'
  },
  {
    id: 3,
    name: 'C',
    image: 'assets/exercises/C.png'
  }
];

export interface Exercise {
  id: number;
  name: string;
  image: string;
}
