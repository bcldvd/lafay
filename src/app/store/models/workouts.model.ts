import { EntityState } from '@ngrx/entity';
import { AppState } from '.';

export interface SubGroup {
  data: string[];
  title: string;
}

export interface RowsData {
  subGroups: SubGroup[];
  Date: string | Date;
  Humeur: string;
}

export interface Workout {
  title: string;
  rowsData: RowsData[];
}

export const mockWorkout = [
  {
    title: 'Niveau 2',
    rowsData: [
      {
        subGroups: [
          {
            data: ['10', '10', '10', '10', '10', '10'],
            title: 'B1'
          },
          {
            data: ['10', '10', '10', '10', '10', '10'],
            title: 'A3'
          }
        ],
        Date: '22/01/2020',
        Humeur: '🥵'
      }
    ]
  }
];

export interface WorkoutsState extends EntityState<Workout> {
  loaded: boolean;
}
