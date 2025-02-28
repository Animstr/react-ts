export type Mods = Record<string, boolean | string | undefined>

export const classNames = (cls: string | undefined, aditional: Array<string | undefined> = [], mods: Mods = {},): string => {

    return [
        cls,
        ...aditional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([key, value]) => Boolean(value))
            .map(([key, value]) => key)
    ].join(' ')
}