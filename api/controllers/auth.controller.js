import bcryptjs from 'bcryptjs'
import User from '../models/user.model.js'

export const signup = async (req, res) => {
    const {email, password} = req.body
    try {
        const hashedPassword = bcryptjs.hashSync(password, 8)
        
        await User.create({ 
            email, 
            password: hashedPassword
        })
        

        res.status(201).json({"msg": "User created successfully"})    
    } catch (error) {
        if (error.code == 11000) {res.status(409).json({"msg":"Cannot register - email already exists"})}
        else 
        res.status(500).json({"msg":"Something went wrong, try again"})
    }

    

}



export const login = async (req,res) => {

    
    try {
        
        const {email, password} = req.body
        const isUser = await User.findOne({email})
        if (!isUser) {
            res.status(401).json({"msg":"User doesn't exist"})
        }

        else {
            if(bcryptjs.compareSync(password, isUser.password)){
            res.status(200).json({"msg":"You are now logged in"})
            } else res.status(401).json({"msg":"Password is incorrect"})
        }

        



        
            
    } catch (error) {
console.log(error)        
    }
    
    
}