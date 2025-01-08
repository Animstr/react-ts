type Mods = Record<string, boolean | string>

export const classNames = (cls: string, aditional: string[] = [], mods: Mods = {},): string => {

    return [
        cls,
        ...aditional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([key, value]) => Boolean(value))
            .map(([key, value]) => key)
    ].join(' ')
}