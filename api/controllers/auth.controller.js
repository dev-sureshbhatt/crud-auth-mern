import bcryptjs from 'bcryptjs'
import User from '../models/user.model.js'

export const signup = async (req, res) => {
    const {displayName, email, password} = req.body
    try {
        const hashedPassword = bcryptjs.hashSync(password, 8)
        
        await User.create({
            displayName, 
            email, 
            password: hashedPassword
        })
        // const isValid = bcryptjs.compareSync('1111', hashedPassword)
        // console.log(isValid)

        res.status(201).json({"msg": "User created successfully"})    
    } catch (error) {
        if (error.code == 11000) {res.status(409).json({"msg":"Cannot register - email already exists"})}
        else 
        res.status(500).json({"msg":"Something went wrong, try again"})
    }

    

}