"use server";

import { redirect } from "next/navigation";

export async function goToWhatsapp() {
  redirect("https://web.whatsapp.com");
}
