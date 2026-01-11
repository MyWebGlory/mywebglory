declare module 'vite-react-ssg' {
  import type { ReactNode } from 'react';
  
  export interface RouteRecord {
    path: string;
    element?: ReactNode;
    children?: RouteRecord[];
    index?: boolean;
    getStaticPaths?: () => string[] | Promise<string[]>;
  }
  
  export interface SSGContext {
    isClient: boolean;
    router: any;
    routes: RouteRecord[];
    initialState: any;
  }
  
  export interface WrapperProps {
    app: ReactNode;
    router: any;
  }
  
  export function ViteReactSSG(
    routerOptions: { routes: RouteRecord[]; basename?: string },
    fn?: (context: SSGContext) => void | Promise<void>,
    wrapper?: (props: WrapperProps) => ReactNode
  ): void;
}
