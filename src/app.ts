import {connectToDB} from "./config/dbConnection"
import { User } from "./models/User"
import { Profile } from "./models/Profile"

connectToDB().then(()=>{
// const user = new User({name :"Surojit", age: 4, profile_id: 2})
// user.save()

const profile = new Profile({name : "surojit"})
profile.save()


})

