import User from "../model/user.mode.js";

export const createUser = async (req, res) => {
    console.log(req.body, "hello")
    try {
      const { email, name, password } = req.body;
      
      if (!email || !name || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const user = await User.create({ email, name, password });
      console.log(user, " this is the user")
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  export const getUser = async (req, res) => {
    try {
        const user = await User.findAll();
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        
    }
  }