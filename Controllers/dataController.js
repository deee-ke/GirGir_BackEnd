const users = require('../Models/dataSchema');

// Controller logic
exports.addData = async (req, res) => {
    console.log('Inside controller');
  
    const {
      email, phone, web, gender, dob, nationality, idnum,
      country, province, city, zip, address
    } = req.body;
  
    try {
      // First, try to find the existing user
      const existingUser = await users.findOne();
  
      if (existingUser) {
        // If the user exists, update the data
        const updatedUser = await users.findOneAndUpdate(
          {},  // Empty filter will update the first user found
          {
            email, phone, web, gender, dob, nationality, idnum,
            country, province, city, zip, address
          },
          { new: true }  // Return the updated user
        );
        return res.status(200).json(updatedUser);
      } else {
        // If no user exists, create a new user
        const newUser = new users({
          email, phone, web, gender, dob, nationality, idnum,
          country, province, city, zip, address
        });
  
        // Save the new user to the database
        await newUser.save();
        return res.status(200).json(newUser);  // Send back the created user
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(406).json({ message: `Request failed due to ${error.message}` });
    }
  };

exports.getData = async(req,res)=>{
    console.log('Inside getData ');

    try {
        const userData = await users.find()

        res.status(200).json(userData)
    } catch (error) {
        res.status(401).json(`Request failed due to ${error}`)
    }
    
}
