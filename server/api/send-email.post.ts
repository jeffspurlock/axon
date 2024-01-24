import { createRequire } from "module";
const require = createRequire(import.meta.url);



const nodemailer = require("nodemailer")
export default defineEventHandler(async (event) => {
    try { 
        const data = await readBody(event);
        /* let transporter = nodemailer.createTransport({
            host: "aspmx.l.google.com",
            port: 25,
            secure: true,
            auth: {
                user: "axonstudios.dev@gmail.com",
                pass: "NveL82QWYRL&La",
            },
            tls: {
                ciphers:'SSLv3'
            }
        })
 */
        /* const email = await transporter.sendMail({
            from: 'New Client <axonstudios.dev@gmail.com>', // sender address
            to: "jeffspurlock@icloud.com", // list of receivers
            subject: "You Have A New Contact Submission", // Subject line
            text: "Hello Jeff, \n You have received a new contact submission \n \n Name: "+data.fName + " " + data.lName +"\n email: "+data.email+"\nPhone Number: "+data.phoneNumber+"\nWebsite: "+data.currentWebsiteUrl+"\nPreferred Calback Time: "+data.preferredCallback+"\nAdditonal Details: "+data.anythingElse
        });  */
        return { 
            msg: "Success!",
            success: true 
        }
    } catch (error) {
        return {
            msg: error,
            success: false
        }
    }
  })