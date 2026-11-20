import Contact from "../models/Contact.js";

export const createContact = async (req , res) => {
    try{
         const { name, email, message} = req.body;
         const contact = await Contact.create({name, email, message});
         return res.status(201).json({success: true, message: "Meassage sent!", contact});
    }catch(err){
       return res.status(500).json({success: false, error: err.message})
        }
    };

    export const getContacts = async(req, res) => {
        const contacts = await Contact.find().sort({createAt: -1});
        return res.json(contacts);
    };
