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
        <svg className={iconClassName}>
          <use></use>
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/anastacia-tkachova/"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        aria-label="LinkedIn"
      >
        <svg className={iconClassName}>
          <use></use>
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;
