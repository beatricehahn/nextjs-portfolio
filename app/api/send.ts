import type { NextApiRequest, NextApiResponse } from "next";
// import sendgrid package
import sendgridMail from '@sendgrid/mail';

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY!)

type Data = {
    success: boolean
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (req.method === 'POST') {
        const { name, email, message } : {name: string, email: string, message: string} = req.body;
        const msg = {
            // initialize message structure
            to: 'hello@beahahn.com',
            from: 'bhahn.dev@gmail.com',
            subject: `${name.toUpperCase()} sent you a message`,
            text: `Email => ${email}`,
            html: `<strong>${message}</strong>`
        }
        try {
            await sendgridMail.send(msg);
            res.status(200).json({success: true})
        } catch (err) {
            res.status(200).json({ success: false })
        }
    }
}