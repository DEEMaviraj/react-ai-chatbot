import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();
console.log("FRONTEND_URL:", process.env.FRONTEND_URL);

const app= express();

app.use(cors({
    origin:process.env.FRONTEND_URL, // temporary for testing
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
}));
app.use(express.json());


//initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/chat',async (req,res)=>{
        
    const userMessage=req.body.message;

    try {

        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash"
        });

        

        const result = await model.generateContent(userMessage);
        console.log(result);


        const reply= result.response.text();

        res.json({reply});

    } catch (error) {

        console.error(error);
        res.status(500).json({error : "something went wrong"});
    };
    

});

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});