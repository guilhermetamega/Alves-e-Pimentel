import type { Metadata } from "next";
import LegalPageShell from "../components/LegalPageShell";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Informações importantes sobre o caráter informativo do conteúdo jurídico deste site.",
  alternates: { canonical: "/aviso-legal" },
};

export default function LegalNoticePage() {
  return (
    <LegalPageShell title="Aviso Legal">
      <section>
        <h2>Caráter informativo</h2>
        <p>
          As informações disponibilizadas neste site possuem caráter geral e
          informativo e não substituem uma análise jurídica individualizada. O envio de
          formulário ou mensagem não constitui contratação e não cria automaticamente
          relação advogado-cliente, que dependerá de confirmação expressa e da
          formalização aplicável ao caso.
        </p>
      </section>

      <section>
        <h2>Análise individual e resultados</h2>
        <p>
          Cada situação depende de fatos, documentos, prazos e legislação próprios.
          Nenhum conteúdo do site representa promessa ou garantia de resultado.
        </p>
      </section>

      <section>
        <h2>Proteção de informações</h2>
        <p>
          Para proteger sua privacidade, não envie senhas, dados bancários, documentos
          completos ou informações sensíveis desnecessárias no primeiro contato.
        </p>
      </section>
    </LegalPageShell>
  );
}
