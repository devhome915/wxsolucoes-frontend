
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { GoogleLogin } from "@react-oauth/google";
import { authService } from "../../services/authService";
import "./login.css";

export function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    if (loading) return;

    setErro("");
    setSucesso(false);
    setLoading(true);

    try {
      await authService.login(email, senha);

      setSucesso(true);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setErro(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async (credentialResponse) => {
    setErro("");
    setLoading(true);

    try {
      await authService.google(
        credentialResponse.credential
      );

      setSucesso(true);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setErro(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h2 className="text-center mb-2">
          WX Soluções
        </h2>

        <p className="text-center text-muted mb-4">
          Entre na sua conta
        </p>

        <form onSubmit={handleLogin}>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>

            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              required
              disabled={loading}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="senha" className="form-label">
              Senha
            </label>

            <input
              id="senha"
              type="password"
              className="form-control"
              placeholder="Sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              autoComplete="current-password"
              required
              disabled={loading}
            />
          </div>

          <div className="text-end mb-3">
            <Link to="/recuperar-senha">
              Esqueceu a senha?
            </Link>
          </div>

          {erro && (
            <div className="alert alert-danger" role="alert">
              {erro}
            </div>
          )}

          {sucesso && (
            <div className="alert alert-success" role="status">
              ✓ Login realizado com sucesso!
            </div>
          )}

          <div className="login-actions">
            <Link to="/cadastro" className="login-register">
              Criar conta
            </Link>

            <button
              type="submit"
              className="btn btn-dark login-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    aria-hidden="true"
                  />
                  Entrando...
                </>
              ) : (
                "Entrar"
              )}
            </button>
          </div>
        </form>

        <div className="login-divider">
          <span>ou</span>
        </div>

        <div className="google-login">
          <GoogleLogin
            onSuccess={handleGoogle}
            onError={() =>
              setErro("Não foi possível entrar com Google.")
            }
            theme="outline"
            size="large"
            shape="rectangular"
            text="continue_with"
            width="300"
          />
        </div>

      </div>
    </div>
  );
}
