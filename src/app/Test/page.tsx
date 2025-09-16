import Header from "../components/Header";
import Section from "../components/Section";

export default function Test() {
  return (
    <>
      <Header id={"inicio"} bgColor="primary" />
      <Section id={"header"} bgColor="primary" className="">
        <h1>Olá</h1>
      </Section>
    </>
  );
}
