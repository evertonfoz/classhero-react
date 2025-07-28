import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/loading.module.css';

import logo1 from '../../assets/logos/logo_001.png';
import logo2 from '../../assets/logos/logo_002.png';
import logo3 from '../../assets/logos/logo_003.png';

const logos = [logo1, logo2, logo3];

export default function Loading() {
  const [logo, setLogo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  const random = Math.floor(Math.random() * logos.length);
  setLogo(logos[random]);

  const timer = setTimeout(() => {
    navigate('/login');
  }, 3000);

  return () => clearTimeout(timer);
}, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {logo && (
          <img
            src={logo}
            alt="Logo aleatória"
            className={styles.logo}
          />
        )}
        <p className={styles.message}>Preparando sua experiência de aprendizado...</p>
      </div>
    </div>
  );
}
