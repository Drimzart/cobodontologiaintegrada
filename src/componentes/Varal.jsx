import { motion } from "framer-motion";

const frases = [
  "Sorrir é um ato de coragem.",
  "Transformamos vidas através de sorrisos.",
  "Cuidar do seu sorriso é nosso compromisso.",
  "Sorrisos verdadeiros começam com confiança.",
  "Você merece voltar a sorrir com segurança.",
];

const imagens = [
  "venda-1.webp",
  "venda-2.webp",
  "venda-3.webp",
  "venda-4.webp",
  "venda-5.webp",
  "venda-6.webp",
  "venda-7.webp",
];

const rotacoes = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3", "rotate-1"];

export default function Varal() {
  const cards = [...frases, ...frases, ...frases]; // triplica para fluidez
  return (
    <section className="bg-[#04416a] py-12 overflow-hidden">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="flex whitespace-nowrap gap-12 text-white text-lg font-medium items-center"
      >
        {cards.map((frase, i) => {
          const imagemIndex = i % imagens.length;
          const rotacao = rotacoes[i % rotacoes.length];
          return (
            <div
              key={i}
              className={`flex flex-col items-center min-w-max bg-white text-[#04416a] p-2 shadow-md rounded-lg ${rotacao}`}
              style={{ width: "150px", height: "190px" }}
            >
              <img
                src={`/imagens/${imagens[imagemIndex]}`}
                alt={`Paciente sorrindo ${imagemIndex + 1}`}
                className="w-full h-[140px] object-cover object-top mb-2 border border-gray-300 rounded"
              />
              <span className="text-center text-sm font-semibold">{frase}</span>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
