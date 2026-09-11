import { permanentRedirect } from "next/navigation";

export default function TestRedirect() {
  permanentRedirect("/");
}
