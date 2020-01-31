import { Injectable } from '@angular/core';
import { exercises, Exercise } from './exercises';
import { levels, Level } from './levels';

@Injectable({
  providedIn: 'root'
})
export class LafayService {
  private exercises: { [key: string]: Exercise } = {};
  private levels: { [key: string]: Level } = {};

  constructor() {
    this.mockExercices();
    this.mockLevels();
  }

  getLevel(id: number): Level {
    const level = this.levels[id];

    level.exercises = level.exercises.map(exo => {
      const exerciseDetails = this.getExercise(exo.exerciseId);
      return { ...exo, ...exerciseDetails };
    });

    return level;
  }

  getExercise(id: number): Exercise {
    return this.exercises[id];
  }

  saveSession(session) {
    // this.databaseService.push('sessions', session);
  }

  private mockExercices() {
    exercises.forEach(exo => {
      this.exercises[exo.id] = exo;
    });
  }

  private mockLevels() {
    levels.forEach(level => {
      this.levels[level.id] = level;
    });
  }
}

export enum ExerciseStatus {
  EXERCISE,
  REST,
  DONE
}
