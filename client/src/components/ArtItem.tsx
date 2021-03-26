export default function ArtItem({name, imagePath}: {name:string, imagePath:string}) {
    return (

        <li>
        <img src={imagePath} alt={name}></img>
        {name}
        </li>
        
    )
}