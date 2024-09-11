import { DisneyCharacter as DCProps } from "../../types/DisneyCharacter.types"

type CharProps = {
    character:  DCProps
}
const showErrorImage = (error: any) => {
    error.target.src = 'https://img.icons8.com/ios-filled/48/no-image.png';
}
export const DisneyCharacter = ({character}: CharProps) => {
    return <div className="flex flex-row justify-normal my-2 mx-1">
        <div id="char_image" >
            <img src={character?.imageUrl} onError={showErrorImage} alt={character?.name} className="rounded-full w-12 h-12"/>
        </div>
        <div className="self-center mx-2">{character?.name}</div>
    </div>
}