import { IPathParameter } from './IPathParameters';
export interface IPath {
    id: string;
    requestType: string;
    url: string;
    tags: string[];
    summary: string;
    parameters: IPathParameter[];
    responses: object;
}
