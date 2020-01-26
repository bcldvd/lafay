export const levels: Level[] = [
  {
    id: 0,
    name: '1a - Test',
    exercises: [
      {
        exerciseId: 0,
        reps: 5, // Max reps
        rounds: 2,
        rest: 3
      },
      {
        exerciseId: 2,
        reps: -1,
        rounds: 1,
        rest: 2
      },
      {
        exerciseId: 3,
        reps: -1,
        rounds: 3,
        rest: 1
      },
      {
        exerciseId: 1,
        reps: -1,
        rounds: 1,
        rest: 4
      }
    ],
    levelUp: [
      {
        nextLevelId: 1,
        conditionExerciseId: 2,
        conditionMinRep: 0
      },
      {
        nextLevelId: 2,
        conditionExerciseId: 2,
        conditionMinRep: 5
      },
      {
        nextLevelId: 3,
        conditionExerciseId: 2,
        conditionMinRep: 8
      }
    ]
  }
];

export interface LevelUp {
  nextLevelId: number;
  conditionExerciseId: number;
  conditionMinRep: number;
}

export interface ExerciseReq {
  exerciseId: number;
  reps: number;
  rounds: number;
  rest: number;
  name?: string;
  image?: string;
}

export interface Level {
  id: number;
  name: string;
  exercises: ExerciseReq[];
  levelUp: LevelUp[];
}
