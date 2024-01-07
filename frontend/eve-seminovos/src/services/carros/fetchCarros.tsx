import Carro from "@/interfaces/carros/carro";

export default async function FetchCarros(): Promise<Carro[]> {
  const response = await fetch("http://localhost:5000/carros", {
    method: "GET",
  });

  switch (response.status) {
    case 200:
      const data = (await response.json()) as Carro[];
      return data;
    default:
      throw new Error("Erro desconhecido");
  }
}
