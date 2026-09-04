import { Icon } from '../Icon/Icon';

interface socialLinkProps {
  containerClassName: string;
  linkClassName: string;
  iconClassName: string;
}

const SocialLinks = ({
  containerClassName,
  linkClassName,
  iconClassName,
}: socialLinkProps) => {
  return (
    <div className={containerClassName}>
      <a
        href="https://github.com/anastacia-tkachova"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        aria-label="GitHub"
      >
        <Icon name="git" className={iconClassName} />
      </a>
      <a
        href="https://www.linkedin.com/in/anastacia-tkachova/"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        aria-label="LinkedIn"
      >
        <Icon name="linked" className={iconClassName} />
      </a>
    </div>
  );
};

export default SocialLinks;
