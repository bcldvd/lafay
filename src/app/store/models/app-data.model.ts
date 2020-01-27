export interface ConfigFile {
  pathOfDb: string;
  title: string;
  id: string;
}

export interface AppDataState extends ConfigFile {
  loaded: boolean;
}
