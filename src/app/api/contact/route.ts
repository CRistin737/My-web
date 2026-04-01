import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, service, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Nombre, email y mensaje son requeridos" },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "XVE Studio <onboarding@resend.dev>",
            to: process.env.CONTACT_EMAIL!,
            replyTo: email,
            subject: `Nuevo contacto: ${name} — ${service || "Sin servicio"}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #DC1E1E; margin-bottom: 4px;">Nuevo mensaje de contacto</h2>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
                    <p><strong>Nombre:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Servicio:</strong> ${service || "No especificado"}</p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
                    <p><strong>Mensaje:</strong></p>
                    <p style="white-space: pre-wrap; background: #f9f9f9; padding: 16px; border-radius: 8px;">${message}</p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
                    <p style="color: #999; font-size: 12px;">Enviado desde xvestudio.com</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: "Error al enviar el mensaje" },
            { status: 500 }
        );
    }
}
