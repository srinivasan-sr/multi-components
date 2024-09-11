export type Name = {
    first: string,
    last: string,
    title: string
}
export type Picture = {
    large: string,
    medium: string,
    thumbnail: string,
}
export type Location = {
    city: string,
    country: string,
    postcode: number,
    state: string,
    street: {
        name: string,
        number: number
    }
}
export type UserCard = {
    name: Name,
    picture: Picture,
    nationality: string,
    location: Location,
}