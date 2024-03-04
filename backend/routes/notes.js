const express = require('express')
const router = express.Router()
const notes = require('../database/models/notes')
const { check, validationResult } = require('express-validator')

// ...........................fetching all notes

router.get('/', async (req, res) => {
    console.log("we have reached here")

    try {

        const Newnotes = await notes.find({ user: req.user.id })
        res.json( {success : 'true', Newnotes})

    } catch (error) {
 
        res.json({ success : 'false', message: "Internal server error", error: error })

    }
})

//.......................................... creating a note
const validate = [
    check('title').isLength({ min: 3 }).withMessage('title must be at least 3 characters'),
    check('description').isLength({ min: 3 }).withMessage('description must be at least 3 characters'),
]
router.post('/addNote', validate, async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.json({ message: "fill the fields properly ", error: errors });
    }

    try {
        const { title, description, tag } = req.body;
        const newNotes = await notes.create({ user: req.user.id, title: title, description: description, tag: tag })
       return res.json(newNotes)

    } catch (error) {

       return res.json({ message: "Internal server error", error: error })

    }
})

// ...........................................updating a note item
router.post('/updateNote/:id', async(req, res)=>{

   
    const{title, description  , tag} = req.body;
    const id = req.params.id;

    try {
        
        const newNote = {};
        if(title && description && tag){
            newNote.title = title;
            newNote.description = description;
            newNote.tag = tag;
        }
    
        const note = await notes.findById(id)
        if(!note){
    
          return res.json({success : false , message : "item does not exist"});
        }
    
        const updatedNote = await notes.findByIdAndUpdate(id , {$set : newNote} , {new : true})
       return res.status(200).json({success : true , updatedNote})
    
    } 
    catch (error) {
       return res.status(500).json({success : false , message : "Internal server error"})
    }
   

})

// Deleting an item from notes

router.post('/deleteNote/:id' , async(req,res)=>{
  
   
    const id = req.params.id;
  
  try {
    
    const note = await notes.findById(id)
   
    if(!note){
       
       return res.json({success : false , message : "unsuccessful deletion"});
    }
    
    await notes.findByIdAndDelete(id)
   
    return  res.status(200).json({success : true , message : "deleted successfully"})
    
    
  }
   catch (error) {
   
   return response.status(500).json({success : false , message : "Internal server error"})
  }
    
})

module.exports = router;