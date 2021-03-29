export default function ArtItem({name, imagePath}: {name:string, imagePath:string}) {
    // I think my git was flipping out because this component was GONE on a 
    // fresh checkout from main and I know I added it in a prior change so
    // I re-added it by grabbing it from somewhere else on my hard drive.
    // But then once, I did so which allowed me to run the project, running
    // "git status" didn't notice the file was changed or added.  It seems
    // as if git is messing up how to track it.
    // So I did an explicit add of this using the fiull path and finally it got
    // the idea that it needed to add it.  Stupid thing.  So here's crossing
    // my fingers that this forces it to do whatever needs doing to track it.
    return (

        <li>
        <img src={imagePath} alt={name}></img>
        {name}
        </li>
        
    )
}