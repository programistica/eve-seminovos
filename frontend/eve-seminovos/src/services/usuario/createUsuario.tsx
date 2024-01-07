import Usuario from "@/interfaces/usuario/usuario";

export default async function CreateUsuario(
  usuario: Usuario
): Promise<Usuario> {
  const response = await fetch(`http://localhost:5000/usuario/create`, {
    method: "POST",
    body: JSON.stringify(usuario),
    headers: {
      "Content-Type": "application/json",
    },
  });
  switch (response.status) {
    case 201:
      const data = (await response.json()) as Usuario;
      return data;
    case 400:
      throw new Error("Usuário já existe");
    default:
      throw new Error("Erro desconhecido");
  }
}
