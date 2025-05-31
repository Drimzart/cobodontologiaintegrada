import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section id="sobre" className="bg-[#f8f9fa] py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Título com imagem no mobile acima do texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto mb-20"
        >
          {/* Imagem no topo em mobile */}
          <motion.img
            src="/imagens/ronald-e-milena.webp"
            alt="Dr. Ronald e Dra. Milena - Sócios da COB Odontologia Integrada"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white shadow-lg w-full object-cover max-h-[420px] order-1 md:order-none hover:scale-105 transition-transform duration-300"
          />

          {/* Texto */}
          <div className="text-center md:text-left text-gray-700 text-base sm:text-lg leading-relaxed space-y-6 order-2 md:order-none">
            <p>
              Na <span className="font-semibold text-[#053f79]">COB Odontologia Integrada</span>, acreditamos que o sorriso é a expressão máxima de felicidade e saúde.
              Nossos princípios são fundamentados em atendimento humanizado, tecnologia de ponta e profissionais com formação de excelência.
            </p>
            <p>
              Somos referência em inovação e resultados duradouros, promovendo experiências transformadoras para cada paciente que confia em nosso cuidado.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Ronald */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-6 rounded-3xl shadow-xl flex flex-col sm:flex-row gap-6 items-start"
          >
            <img
              src="/imagens/ronald.webp"
              alt="Dr. Ronald de Freitas Paixão"
              className="w-full sm:w-1/3 object-cover rounded-2xl border-4 border-[#053f79] shadow-md"
            />
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-bold text-[#053f79]">Dr. Ronald de Freitas Paixão</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[ 
                  'CEO da COB Odontologia Integrada',
                  'Mestre em Odontopediatria - UFSC',
                  'Doutor em Odontopediatria - USP',
                  'Mestre em Ortodontia - UNESP',
                  'Prof. Titular - UEFS',
                  'Coord. da Pós em Ortodontia - Avance',
                ].map((item, i) => (
                  <span
                    key={i}
                    className="bg-[#053f79] text-white text-sm py-2 px-3 rounded-lg shadow-md hover:bg-blue-900 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Milena */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-6 rounded-3xl shadow-xl flex flex-col sm:flex-row gap-6 items-start"
          >
            <img
              src="/imagens/milena.webp"
              alt="Dra. Milena Leite de Freitas Paixão"
              className="w-full sm:w-1/3 object-cover rounded-2xl border-4 border-[#053f79] shadow-md"
            />
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-bold text-[#053f79]">Dra. Milena Leite de Freitas Paixão</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[ 
                  'Sócia da COB Odontologia Integrada',
                  'Especialista em Estética Dental',
                  'Especialista em Clareamento',
                  'Especialista em Lentes de Contato',
                  'Especialista em Imaginologia',
                  'Especialista em Prótese Dental',
                ].map((item, i) => (
                  <span
                    key={i}
                    className="bg-[#053f79] text-white text-sm py-2 px-3 rounded-lg shadow-md hover:bg-blue-900 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
