const userModal = require("../modal/user");
const { baseModelName } = require("../modal/user");

const storeUser = async (req, res) => {
  try {
    const user = await new userModal(req.body);
    user.save();

    res.status(201).send(user);
  } catch (error) {}
};

// db.users.find({
//   "$expr": { 
//       "$and": [
//            { "$eq": [ { "$dayOfMonth": "$dob" }, { "$dayOfMonth": new Date() } ] },
//            { "$eq": [ { "$month"     : "$dob" }, { "$month"     : new Date() } ] }
//       ]
//    }
// });
const getUsers = async (req, res) => {
  let name=[]
  try {
    const users = await userModal.aggregate([
      { 
        $match: {
          $expr: {
            $and: [
              { $eq: [{ $dayOfMonth: '$DOB' }, { $dayOfMonth: new Date() }] },
              { $eq: [{ $month: '$DOB' }, { $month: new Date() }] },
            ],
          },
        }
      }
    ])
    users.map(user=>{
      name.push(user.name)
    })
    res.status(200).send(name);
    console.log(users)
    for (let key in users) {
      console.log(key)
      let value = obj[key];
      if (obj.hasOwnProperty(key)) {
        console.log(`Property ${key} is NOT from prototype chain`);
      } else {
        console.log(`Property ${key} is from prototype chain`);
      }
    }
    console.log(users)
  } catch (error) {
    console.log(error)
  }
};






module.exports = {
  storeUser,
  getUsers,
 
};
