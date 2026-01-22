    "use server";

    import * as nodemailer from "nodemailer";

    export async function sendMail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Contact Form - ${name}`,
        html: `
        <p><b>Nama:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Pesan:</b><br/>${message}</p>
        `,
    });
    }
