import bcrypt from "bcryptjs";

export default async function passwordHash ( raw:string ) { 
    return await bcrypt.hash(raw, await bcrypt.genSalt( 10 ))
}