const connection = require("../config/database")

const testHomeController = (req,res) => {
    res.send("Hello world from home controller123")
}

const abcRoute = (req,res) => {
    let array = []
    let i = 0
    for(i >=0 ; i<10;i++){
        array.push(i)
    }
    res.status(200).json({message:"Day la message gui den postman",data:array})
}

const insertUser = (req,res)=>{
    let {email,name,city} = req.body
    
    connection.query(
        `INSERT INTO users (email, name, city)
        VALUES (?, ?, ?);`,[email,name,city]
    )

    return res.status(200).json({message:"Insert successfully"})
}

const listAllUser = async (req, res) => {
    try {
      const Users = await new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users', (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
  
      console.log("Users", Users);
      return res.status(200).json({ message: "Success", Users });
    } catch (error) {
      // handle any errors that occur during the query
      console.error(error);
      return res.status(500).json({ message: "Error", error });
    }
  }

module.exports = {
    testHomeController,abcRoute,insertUser,listAllUser
}