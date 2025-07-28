import { useState, useEffect } from "react";
import styles from '../../styles/loading.module.css';
import logo1 from "../../assets/logos/logo_001.png";
import logo2 from "../../assets/logos/logo_002.png";
import logo3 from "../../assets/logos/logo_003.png";

const logos = [logo1, logo2, logo3];

export default function Login() {
  const [showVerifyForm, setShowVerifyForm] = useState(false);
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    const random = Math.floor(Math.random() * logos.length);
    setLogo(logos[random]);
  }, []);

  return (
    <div className={styles.page}>
      <button id="toggleTheme" className={styles.toggleTheme}>🌙</button>

      <div className={styles.container}>
        {/* Coluna da imagem */}
        <div className={styles.left}>
          {logo && <img src={logo} alt="Mascote" className={styles.logo} />}
        </div>

        {/* Coluna do formulário */}
        <div className={styles.right}>
          <h1 className={styles.title}>Entrar no ClassHero</h1>

          {!showVerifyForm ? (
            <form className={styles.form}>
              <label htmlFor="emailInput" className={styles.label}>Seu e-mail</label>
              <input
                type="email"
                id="emailInput"
                placeholder="ex: aluno@email.com"
                className={styles.input}
                required
              />
              <button type="button" className={styles.button} disabled>
                Acessar / Receber código
              </button>
            </form>
          ) : (
            <form className={styles.form}>
              <label htmlFor="codeInput" className={styles.label}>Código de verificação</label>
              <input
                type="text"
                id="codeInput"
                placeholder="Digite o código"
                className={styles.input}
                required
              />
              <button type="submit" className={styles.button}>
                Verificar código
              </button>
            </form>
          )}

          <p className={styles.status}>{/* Mensagem futura */}</p>
        </div>
      </div>
    </div>
  );
}
