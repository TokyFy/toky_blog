import style from './LoginBtn.module.scss';
import { github } from '../../assets/icons';

const CLIENT_ID = String(import.meta.env.VITE_CLIENT_ID);
const REDIRECT_URI = String(import.meta.env.VITE_REDIRECT_URI);

const LoginBtn = () => {
  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`}
      className={style.loginBtn}
    >
      <span>Login</span>
      <img src={github} alt={''} />
    </a>
  );
};

export default LoginBtn;
