"use client"
import Input from "@/components/atoms/Input";
import MessageBox from "@/components/atoms/MessageBox";
import { FormEvent } from 'react';

export default function DeprecatedContact() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const response = await fetch('/api/send', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();


    }

    return (
        <div>
            <div>
                <h1>CONTACT</h1>
                <h2>LET'S THINK OUTSIDE THE BOX TOGETHER.</h2>
                <p>For inquiries or collaboration</p>
                <span>Email me at hello@beahahn.com</span>
                <br/>
                <span>Reach out over on <a href="/">LinkedIn</a></span>
                <br/>
            </div>
            <div className='px-3 pt-10'>
                <form onSubmit={onSubmit} action="" className="flex flex-col items-center w-1/3 mx-auto">
                    <Input 
                        id="name" 
                        name="name" 
                        placeholder="Jane Doe" 
                        label="Name (*)"
                    />
                    <Input 
                        id="email" 
                        name="email" 
                        placeholder="janedoe@gmail.com" 
                        label="Email (*)" 
                    />
                    <MessageBox 
                        id="message" 
                        name="message" 
                        placeholder="Describe the vision for your project, goals and timelines, budget, etc. " 
                        label="About your project (*)"
                    />
                    <button className='w-full py-2 mt-6 text-lg text-white bg-white-800 active:bg-black-200 rounded-md focus:ring-2 focus:ring-purple disabled:bg-opacity-50 disabled:cursor-not-allowed' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}