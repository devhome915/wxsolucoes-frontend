
const API = import.meta.env.VITE_API_URL;

async function requisicao(caminho, opcoes = {}) {
  const resposta = await fetch(`${API}/api/auth${caminho}`, {
    ...opcoes,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...opcoes.headers,
    },
  });

  const dados = await resposta.json();

  if (!resposta.ok) {
    throw new Error(dados.mensagem || "Erro na solicitação");
  }

  return dados;
}

export const authService = {
  login: (email, senha) =>
    requisicao("/login", {
      method: "POST",
      body: JSON.stringify({ email, senha }),
    }),

  cadastro: (nome, email, senha) =>
    requisicao("/cadastro", {
      method: "POST",
      body: JSON.stringify({ nome, email, senha }),
    }),

  google: (credential) =>
    requisicao("/google", {
      method: "POST",
      body: JSON.stringify({ credential }),
    }),

  perfil: () => requisicao("/perfil"),

  logout: () =>
    requisicao("/logout", { method: "POST" }),
};
