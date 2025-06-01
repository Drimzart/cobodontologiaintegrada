<form
  action="https://formsubmit.co/kaio.murillo@yahoo.com.br" // coloque seu email real aqui
  method="POST"
  className="bg-blue-50 p-8 flex flex-col justify-center"
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
