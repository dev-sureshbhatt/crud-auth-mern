import bcryptjs from 'bcryptjs'

export const signup = (req, res) => {
    const {email, password} = req.body
    console.log(req.body)

    try {

        const hashedPassword = bcryptjs.hashSync(password, 8)
        console.log(hashedPassword)

        const isValid = bcryptjs.compareSync('1111', hashedPassword)
        console.log(isValid)



        res.json({"msg": "working"})    
    } catch (error) {
        
    }

    

}