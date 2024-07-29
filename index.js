import { OpenAI } from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({apiKey:process.env.PRIVATE_KEY});

console.log(openai)

async function getAnswer() {
    const completion = await openai.chat.completions.create({
        messages:[
            {
                role:"system",
                content:"You are a helpful Ass istant!"
            },
            {
                role:"user",
                content:"What is the capitol of Morocco?"
            }
        ],
        model: "gpt-3.5-turbo"
    })

    console.log(completion.choices[0].message.content);
};

getAnswer();
