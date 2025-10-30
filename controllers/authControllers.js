const login= async (req, res)=>{
    try{
        res.json({
            message: "login exitoso",
            status: "succes",
        });
    } catch (error) {
        res
        .status(500)
        .json({message: "error interno", satatus: "error", error: error});
    }
};

module.exports= {
    login,
};