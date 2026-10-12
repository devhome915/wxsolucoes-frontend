
import { useState } from "react";
import "./contatosCss/contatosCss.css";

export function ContatoForm() {
  const [form, setForm] = useState({
    nome: "",
    assunto: "",
    mensagem: "",
    aceite: false,
  });

  const [status, setStatus] = useState("idle");
  const [validado, setValidado] = useState(false);

  const carregando = status === "loading";

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formulario = event.currentTarget;

    setValidado(true);

    if (!formulario.checkValidity()) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: form.nome.trim(),
          assunto: form.assunto.trim(),
          mensagem: form.mensagem.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      setStatus("success");

      setForm({
        nome: "",
        assunto: "",
        mensagem: "",
        aceite: false,
      });

      setValidado(false);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="contatoForm container py-5">
      <h2 className="mb-4">Contato</h2>

      <form
        noValidate
        onSubmit={handleSubmit}
        className={validado ? "was-validated" : ""}
      >
        {/* NOME */}
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>

          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
            value={form.nome}
            onChange={handleChange}
            disabled={carregando}
            required
            minLength={3}
          />

          <div className="invalid-feedback">
            Digite seu nome (mínimo de 3 caracteres).
          </div>
        </div>

        {/* ASSUNTO */}
        <div className="mb-3">
          <label htmlFor="assunto" className="form-label">
            Assunto
          </label>

          <input
            type="text"
            className="form-control"
            id="assunto"
            name="assunto"
            placeholder="Digite o assunto"
            value={form.assunto}
            onChange={handleChange}
            disabled={carregando}
            required
          />

          <div className="invalid-feedback">
            Digite o assunto.
          </div>
        </div>

        {/* MENSAGEM */}
        <div className="mb-3">
          <label htmlFor="mensagem" className="form-label">
            Comentário
          </label>

          <textarea
            className="form-control"
            id="mensagem"
            name="mensagem"
            rows="5"
            placeholder="Escreva sua mensagem..."
            value={form.mensagem}
            onChange={handleChange}
            disabled={carregando}
            required
          />

          <div className="invalid-feedback">
            Digite sua mensagem.
          </div>
        </div>

        {/* ACEITE */}
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="aceite"
            name="aceite"
            checked={form.aceite}
            onChange={handleChange}
            disabled={carregando}
            required
          />

          <label
            className="form-check-label"
            htmlFor="aceite"
          >
            Concordo com o envio das informações.
          </label>

          <div className="invalid-feedback">
            Você precisa concordar para continuar.
          </div>
        </div>

        {/* BOTÃO */}
        <div className="d-flex align-items-center gap-3 flex-wrap">
          <button
            type="submit"
            className="btn btn-primary btn-enviar"
            disabled={carregando}
          >
            {carregando ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                />
                Enviando...
              </>
            ) : (
              "Enviar mensagem"
            )}
          </button>

          {status === "success" && (
            <div
              className="mensagem-sucesso"
              role="status"
            >
              <span aria-hidden="true">✓</span>
              Mensagem enviada com sucesso!
            </div>
          )}
        </div>

        {/* ERRO */}
        {status === "error" && (
          <div className="alert alert-danger mt-3" role="alert">
            Não foi possível enviar sua mensagem.
            Tente novamente.
          </div>
        )}
      </form>
    </div>
  );
}
