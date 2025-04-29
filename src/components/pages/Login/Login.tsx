// pages/Login/Login.tsx

import { useNavigate } from "react-router-dom";
import "./Login.css";

export function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/NotFound");
  };

  return (
    <section className="login-container">
      <div>
        <form className="login" onSubmit={handleSubmit}>
          <h2 className="container-title">Login</h2>
          <br />
          <div>
            <label className="label1" htmlFor="email">
              Email
            </label>
            <br />
            <input className="input1" type="email" id="email" placeholder="Digite seu email" />
          </div>
          <br />
          <div>
            <label className="label1" htmlFor="senha">
              Senha
            </label>
            <br />
            <input className="input1" type="senha" id="senha" placeholder="Digite sua senha" />
          </div>
          <br />
          <button className="button" type="submit">Entrar</button>
        </form>
      </div>
    </section>
  );
}
