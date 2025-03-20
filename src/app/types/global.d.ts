

declare module '*.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare const __IS_DEV__:boolean;
declare const __API_URL__: string;
declare const __PROJECT__: 'frontend' | 'storybook' | 'jest';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OptionRecord<K extends keyof any, T> = {
  [P in K]?: T;
};