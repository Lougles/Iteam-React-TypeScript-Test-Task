import Main from "../pages/Main";

export interface IRoute {
  path: string,
  component: React.ComponentType,
  exact?: boolean,
}

export enum RouteNames {
  Main = '/',
}

export const routes: IRoute[] = [
  // {path: '/', exact: true, component: Main}
]