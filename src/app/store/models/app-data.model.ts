export interface ConfigFile {
  pathOfDb: string;
  title: string;
  id: string;
}

export interface AppDataState extends ConfigFile {
  loaded: boolean;
}

export const mockAppData: ConfigFile = {
  pathOfDb: '.',
  title: 'mock',
  id: 'test-id'
};
