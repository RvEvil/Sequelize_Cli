const express=require('express');
const app=express();
const { User } = require('./models');


app.use(express.json());
app.get('/',(req,res)=>{
    res.send("welcome");
});

app.post('/',async (req,res)=>{
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        res.status(201).json(user);
      } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
app.listen(3000,()=>console.log('server running at port 3000'));