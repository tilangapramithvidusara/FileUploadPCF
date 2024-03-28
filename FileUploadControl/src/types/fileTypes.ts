import { IInputs, IOutputs } from "../../generated/ManifestTypes";

export interface FileUploaderState {
  selectedFile: File | null;
}

export interface AppInterface {
  context: ComponentFramework.Context<IInputs> | null;
}

export interface JSONFileSource {
  id: number;
  type: string;
  header: string;
  content: string;
}

export interface JSONSingleObjectForMap {
  id: number;
  order: number;
  type: string;
  isTable: boolean;
  headerType: string;
  headerContent: string;
  bodyContent: string;
  tableHeaders: [{ key: string; value: string }] | null;
  tableBody: [{ key: string; value: string }] | null;
  parentID: number | null;
  childID: number | null;
}
