import { useEffect, useState } from "react"
import api from '../utils/api'

export default function ArtItem({showcontactinfo, userid, name, imagePath, description, category, size, price}: {showcontactinfo:boolean, userid:string, name:string, imagePath:string, description:string, category: string, size: string, price: string}) {
    // I think my git was flipping out because this component was GONE on a 
    // fresh checkout from main and I know I added it in a prior change so
    // I re-added it by grabbing it from somewhere else on my hard drive.
    // But then once, I did so which allowed me to run the project, running
    // "git status" didn't notice the file was changed or added.  It seems
    // as if git is messing up how to track it.
    // So I did an explicit add of this using the fiull path and finally it got
    // the idea that it needed to add it.  Stupid thing.  So here's crossing
    // my fingers that this forces it to do whatever needs doing to track it.

    const [authorUser, setAuthorUser] = useState({})

    useEffect(() => {
        async function asyncStuff() {
            let userWhoSubmittedTheArt = await api.getUserById(userid)
            setAuthorUser(userWhoSubmittedTheArt.data);
        }

        asyncStuff().then(() => {
            console.log("user has been retrieved for the art item.");
        });
    },[]);

    return (

        <li>
        <img src={imagePath} alt={name}></img>
        <br/>
        title: {name} <br/>
        {showcontactinfo && (
            <div>
        author: {authorUser.name} <br/>
        location: {authorUser.location} <br/>
        email: {authorUser.email} <br/>
        phone: {authorUser.phone} <br/>
        ID: {authorUser._id} <br/>
        </div>
        )}
        </li>
        
    )
}