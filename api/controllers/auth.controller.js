export const signup = (req, res) => {
    const {email, password} = req.body
    console.log(req.body)
    res.json({"msg": "working"})

}