

type Item = {
    id: string,
    name: string,
    isStrikeThrough: boolean
}
export type StrikeItems = {
    item: Item,
    onClick: (id: string) => void,
}

export type ButtonProps = {
    children: React.ReactNode,
    onClick: () => void,
}