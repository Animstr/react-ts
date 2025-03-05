

export type BuildMode = 'production' | 'development';

export type ProjectMode = 'frontend' | 'storybook' | 'jest';

export interface BulidPaths {
    entry: string,
    dist: string,
    html: string,
    src: string
}

export interface BuildEnv {
    port: number,
    mode: BuildMode,
    apiUrl?:string
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BulidPaths,
    port: number,
    isDev?: boolean,
    apiUrl?: string,
    project: ProjectMode
}