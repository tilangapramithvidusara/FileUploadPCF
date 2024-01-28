import {IInputs, IOutputs} from "../../generated/ManifestTypes";

export interface FileUploaderState {
  selectedFile: File | null;
}

export interface AppInterface {
  context: ComponentFramework.Context<IInputs> | null
}
