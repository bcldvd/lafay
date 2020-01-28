import { EntityState } from '@ngrx/entity';

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

export const mockWorkout: Workout[] = [
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
        Date:
          'Tue Jan 28 2020 00:00:00 GMT+0100 (Central European Standard Time)',
        Humeur: '🥵'
      }
    ]
  }
];

export interface WorkoutsState extends EntityState<Workout> {
  loaded: boolean;
}
