"use client";

import { ChevronRight } from "lucide-react";
import { FormEvent } from "react";

type Props = {
  whatsappNumber: string;
  defaultMessage: string;
};

export default function ContactForm({
  whatsappNumber,
  defaultMessage,
}: Props) {
  const isConfigured = Boolean(
    whatsappNumber.replace(/\D/g, "") && defaultMessage.trim(),
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isConfigured) return;

    const form = new FormData(event.currentTarget);
    const message = [
      defaultMessage.trim(),
      "",
      `Nome: ${String(form.get("name") || "")}`,
      `Telefone: ${String(form.get("phone") || "Não informado")}`,
      `E-mail: ${String(form.get("email") || "Não informado")}`,
      `Relato inicial: ${String(form.get("case") || "")}`,
    ].join("\n");
    const number = whatsappNumber.replace(/\D/g, "");

    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  const fieldClassName =
    "min-h-11 w-full rounded-md border border-secondary bg-gray-light px-3 py-2 font-lato text-base text-primary-dark placeholder:text-gray focus:border-secondary-light";

  return (
    <form
      className="w-full rounded-lg border-2 border-secondary bg-primary-dark px-5 py-7 shadow-lg sm:px-8 lg:p-10"
      onSubmit={handleSubmit}
      aria-describedby="contact-form-status"
    >
      <div className="grid gap-5">
        <div>
          <label
            className="mb-2 block font-lato text-sm text-gray-light"
            htmlFor="contact-name"
          >
            NOME COMPLETO <span aria-hidden="true">*</span>
          </label>
          <input
            className={fieldClassName}
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              className="mb-2 block font-lato text-sm text-gray-light"
              htmlFor="contact-phone"
            >
              TELEFONE
            </label>
            <input
              className={fieldClassName}
              id="contact-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
            />
          </div>
          <div>
            <label
              className="mb-2 block font-lato text-sm text-gray-light"
              htmlFor="contact-email"
            >
              E-MAIL
            </label>
            <input
              className={fieldClassName}
              id="contact-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
            />
          </div>
        </div>

        <div>
          <label
            className="mb-2 block font-lato text-sm text-gray-light"
            htmlFor="contact-case"
          >
            CONTE SEU CASO <span aria-hidden="true">*</span>
          </label>
          <textarea
            className={`${fieldClassName} min-h-36 resize-y`}
            id="contact-case"
            name="case"
            required
          />
        </div>

      </div>

      <button
        className="mx-auto mt-7 flex min-h-12 items-center justify-center gap-1 rounded-md bg-secondary px-5 py-3 font-crimson-pro text-lg text-primary-dark transition-colors enabled:hover:bg-secondary-light disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={!isConfigured}
      >
        ENTRAR EM CONTATO
        <ChevronRight aria-hidden="true" />
      </button>
      <p
        id="contact-form-status"
        className="mt-4 text-center font-lato text-xs leading-relaxed text-gray-light"
      >
        {isConfigured
          ? "O formulário não armazena os dados neste site: ele apenas monta e abre a mensagem no WhatsApp para sua conferência."
          : "O envio será habilitado assim que o número e a mensagem padrão do WhatsApp forem aprovados."}
      </p>
    </form>
  );
}
