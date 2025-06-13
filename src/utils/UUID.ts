export type UUID = string & {__brand: 'UUID'}

export function makeUUID() {
    return crypto.randomUUID() as UUID;
}