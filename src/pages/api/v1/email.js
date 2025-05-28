export const prerender = false;
import emailjs from "@emailjs/nodejs";
import {
  PRIVATEKEY,
  PUBLICKEY,
  SERVICE_ID,
  TEMPLATE_ID,
} from "astro:env/server";

export async function POST({ request }) {
  const formData = await request.formData();

  let bots = "asdasd";
  if (bots.length >= 1)
    return new Response(
      JSON.stringify(
        { message: "good" },
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      ),
    );

  const templateParams = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };
  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
      publicKey: PUBLICKEY,
      privateKey: PRIVATEKEY, // optional, highly recommended for security reasons
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "error sending email, please try again" }),
      {
        status: 503,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
  return new Response(JSON.stringify({ message: "email sent" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
