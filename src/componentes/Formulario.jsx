import { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

export default function Formulario() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch('https://formsubmit.co/kaio.murillo@yahoo.com.br', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      setEnviado(true);
      e.target.reset();
    } else {
      alert('Erro ao enviar. Tente novamente.');
    }
  };

  if (enviado) {
    return (
      <div className="bg-blue-50 p-8 text-[#053f79] rounded max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Obrigado pelo contato!</h2>
        <p>Recebemos sua mensagem e entraremos em contato em breve.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-stretch justify-center max-w-6xl mx-auto bg-blue-50 rounded overflow-hidden" style={{ height: '450px' }}>
      
      {/* Imagem ao lado do formulário */}
      <div className="w-full md:w-1/2">
        <img
          src="/imagens/recepcao-1.png" // ajuste o caminho conforme sua estrutura
          alt="Imagem relacionada ao contato"
          className="w-full h-full object-cover"
          style={{ borderTopLeftRadius: '0.75rem', borderBottomLeftRadius: '0.75rem' }} // arredondado só nas pontas externas
        />
      </div>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 flex flex-col justify-center p-8 bg-blue-50"
        style={{ borderTopRightRadius: '0.75rem', borderBottomRightRadius: '0.75rem' }} // arredondado só nas pontas externas
      >
        <h2 className="text-2xl font-bold text-[#053f79] mb-6">Entre em Contato</h2>

        {/* Nome e Telefone */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center bg-white border border-blue-200 rounded px-3 py-2">
            <User className="text-[#053f79] mr-3" size={20} />
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              required
              className="w-full focus:outline-none text-sm bg-transparent"
            />
          </div>

          <div className="flex items-center bg-white border border-blue-200 rounded px-3 py-2">
            <Phone className="text-[#053f79] mr-3" size={20} />
            <input
              type="tel"
              name="telefone"
              placeholder="Telefone"
              required
              className="w-full focus:outline-none text-sm bg-transparent"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center bg-white border border-blue-200 rounded mb-4 px-3 py-2">
          <Mail className="text-[#053f79] mr-3" size={20} />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            className="w-full focus:outline-none text-sm bg-transparent"
          />
        </div>

        {/* Mensagem */}
        <div className="flex items-start bg-white border border-blue-200 rounded mb-6 px-3 py-2">
          <MessageSquare className="text-[#053f79] mr-3 mt-1" size={20} />
          <textarea
            name="mensagem"
            placeholder="Mensagem"
            rows={4}
            required
            className="w-full resize-none focus:outline-none text-sm bg-transparent"
          ></textarea>
        </div>

        <input type="hidden" name="_captcha" value="false" />

        {/* Botão */}
        <div>
          <button
            type="submit"
            className="flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold text-base shadow-lg bg-[#053f79] hover:bg-[#0d4c91] transition-transform hover:scale-105 backdrop-blur-md"
          >
            <Send size={18} />
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
