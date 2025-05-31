import { Star } from "lucide-react";

const especialidades = [
  {
    nome: "Ortodontia",
    imagem: "/imagens/ortodontia.webp",
    descricao: [
      "Aparelhos fixos",
      "Aparelhos autoligados",
      "Alinhadores ortodônticos",
      "Aparelhos fixos de porcelana",
    ],
  },
  {
    nome: "Implantodontia",
    imagem: "/imagens/implantodontia.webp",
    descricao: ["Implante unitário", "Enxerto", "Implante zigomático"],
  },
  {
    nome: "Prótese",
    imagem: "/imagens/protese.webp",
    descricao: ["Prótese total", "Prótese parcial", "Prótese protocolo"],
  },
  {
    nome: "Endodontia",
    imagem: "/imagens/endodontia.webp",
    descricao: ["Tratamento de canal", "Retratamento endodôntico"],
  },
  {
    nome: "Radiologia",
    imagem: "/imagens/radiologia.webp",
    descricao: ["Radiografias odontológicas", "Tomografias"],
  },
  {
    nome: "Estética",
    imagem: "/imagens/estetica.webp",
    descricao: ["Clareamento dental", "Facetas de porcelana"],
  },
  {
    nome: "Periodontia",
    imagem: "/imagens/periodontia.webp",
    descricao: ["Limpeza profunda", "Tratamento de gengivite"],
  },
  {
    nome: "Cirurgia",
    imagem: "/imagens/cirurgia.webp",
    descricao: ["Extração de sisos", "Cirurgias gengivais", "Biópsias"],
  },
];

export default function Especialidades() {
  return (
    <section
      id="especialidades"
      className="bg-[#e8f1fa] py-20 px-4 sm:px-6 relative scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#04416a] mb-12 font-serif">
          Nossas Especialidades
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {especialidades.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition cursor-default"
            >
              <figure className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-3">
                <img
                  src={item.imagem}
                  alt={`Imagem representativa da especialidade ${item.nome}`}
                  loading="lazy"
                  className="object-cover w-full h-full"
                  width={400}
                  height={300}
                />
              </figure>
              <h3 className="text-lg font-semibold text-[#04416a] text-center">
                {item.nome}
              </h3>
              <div className="flex justify-center space-x-1 mt-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="stroke-yellow-400 fill-yellow-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 px-2">
                {item.descricao.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}