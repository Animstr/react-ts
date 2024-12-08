

export type BuildMode = 'production' | 'development';

export interface BulidPaths {
    entry: string,
    dist: string,
    html: string
}

export interface BuildEnv {
    port: number,
    mode: BuildMode
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BulidPaths,
    port: number
}