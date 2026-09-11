import type { Metadata } from "next";
import LegalPageShell from "../components/LegalPageShell";
import { siteConfig } from "../site-config";

export const metadata: Metadata = {
  title: "Aviso de Privacidade",
  description:
    "Saiba como a Alves & Pimentel trata os dados pessoais enviados pelos canais de contato do site.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <LegalPageShell title="Aviso de Privacidade">
      <section>
        <h2>Quem trata os dados</h2>
        <p>
          A {siteConfig.name} atua como controladora dos dados pessoais enviados
          voluntariamente pelos canais deste site. Solicitações relacionadas à
          privacidade e aos direitos dos titulares podem ser encaminhadas para{" "}
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
        </p>
      </section>

      <section>
        <h2>Dados tratados</h2>
        <p>
          No formulário de contato podem ser informados nome, telefone, e-mail e o
          relato inicial da solicitação. O titular deve evitar incluir senhas, dados
          bancários, documentos completos ou dados pessoais sensíveis que não sejam
          indispensáveis ao primeiro contato.
        </p>
      </section>

      <section>
        <h2>Como o formulário funciona</h2>
        <p>
          O formulário não envia nem armazena os dados em um servidor próprio do site.
          As informações são organizadas no navegador do usuário e abertas no WhatsApp
          para conferência antes do envio. A mensagem somente é transmitida quando o
          próprio usuário confirma o envio no WhatsApp.
        </p>
      </section>

      <section>
        <h2>Finalidades e bases legais</h2>
        <p>
          Os dados podem ser utilizados para responder ao contato, realizar triagem
          inicial, agendar atendimento e adotar procedimentos preliminares solicitados
          pelo titular. Conforme o contexto, o tratamento poderá se apoiar nas bases
          legais aplicáveis previstas na LGPD, inclusive procedimentos preliminares
          relacionados a contrato, cumprimento de obrigação legal ou regulatória,
          exercício regular de direitos e consentimento quando necessário.
        </p>
      </section>

      <section>
        <h2>Compartilhamento</h2>
        <p>
          Quando o usuário opta pelo WhatsApp ou Instagram, os dados passam a ser
          tratados também pelos respectivos provedores, de acordo com os termos e
          políticas dessas plataformas. Prestadores de hospedagem e segurança podem
          processar dados técnicos indispensáveis ao funcionamento e à proteção do site.
        </p>
      </section>

      <section>
        <h2>Retenção e segurança</h2>
        <p>
          As informações recebidas pelos canais de atendimento serão mantidas somente
          pelo período necessário à finalidade do contato e aos deveres legais,
          regulatórios, contratuais e profissionais aplicáveis.
        </p>
      </section>

      <section>
        <h2>Direitos do titular</h2>
        <p>
          O titular pode solicitar confirmação do tratamento, acesso, correção,
          informações sobre compartilhamento, oposição, revogação do consentimento e
          eliminação quando aplicável, além dos demais direitos previstos na LGPD. Os
          pedidos podem ser enviados para{" "}
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> e
          poderão exigir confirmação de identidade para proteção do próprio titular.
        </p>
      </section>

      <section>
        <h2>Serviços externos e tipografia</h2>
        <p>
          O site utiliza links para WhatsApp e Instagram. A versão atual também carrega
          tipografias do Google Fonts, o que pode gerar uma conexão técnica entre o
          navegador do visitante e a infraestrutura do Google.
        </p>
      </section>

      <section>
        <h2>Atualizações</h2>
        <p>
          Este aviso poderá ser atualizado para refletir mudanças no site, nos canais
          de atendimento ou nas práticas de tratamento. A versão publicada indicará a
          data da última atualização.
        </p>
      </section>
    </LegalPageShell>
  );
}
