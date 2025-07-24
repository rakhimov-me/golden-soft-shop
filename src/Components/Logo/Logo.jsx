import './Logo.scss';
import classNames from 'classnames';

const Logo = (props) => {
  const {
    className,
    loading = 'lazy',
    width,
    theme = 'dark',
  } = props;
  const title = 'Home';

  // Выбор пути к логотипу в зависимости от темы
  const logoSrc = theme === 'light' ? '/LogoDark.svg' : '/Logo.svg';

  return (
    <a
      className={classNames(className, 'logo')}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src={logoSrc}
        alt=""
        width={width}
        loading={loading}
      />
    </a>
  );
};

export default Logo;