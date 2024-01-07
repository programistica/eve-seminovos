import CreateCarro from "@/interfaces/carros/createCarro";

export default async function CreateCarro(
  createCarro: CreateCarro
): Promise<CreateCarro> {
  const response = await fetch(`http://localhost:5000/carros/create`, {
    method: "POST",
    body: JSON.stringify(createCarro),
    headers: {
      "Content-Type": "application/json",
    },
  });
  switch (response.status) {
    case 200:
      const data = (await response.json()) as CreateCarro;
      return data;
    case 404:
      throw new Error("Carro não encontrado");
    default:
      throw new Error("Erro desconhecido");
  }
}
