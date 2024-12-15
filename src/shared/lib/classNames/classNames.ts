type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mods = {}, aditional: string[] = []): string => {

    return [
        cls,
        ...aditional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([key, value]) => Boolean(value))
            .map(([key, value]) => key)
    ].join(' ')
}