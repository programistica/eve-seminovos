import UpdateCarro from "@/interfaces/carros/updateCarro";

export default async function UpdateCarros(
  updateCarro: UpdateCarro
): Promise<UpdateCarro> {
  const response = await fetch(
    `http://localhost:5000/carros/update/${updateCarro.id}`,
    {
      method: "PUT",
      body: JSON.stringify(updateCarro),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  switch (response.status) {
    case 200:
      const data = (await response.json()) as UpdateCarro;
      return data;
    case 404:
      throw new Error("Carro não encontrado");
    default:
      throw new Error("Erro desconhecido");
  }
}
