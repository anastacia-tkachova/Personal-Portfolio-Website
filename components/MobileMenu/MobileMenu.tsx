import SocialLinks from '../SocialLinks/SocialLinks';
import Navigation from '../Navigation/Navigation';

const MobileMenu = () => {
  return (
    <div>
      <Navigation />

      <div>
        <SocialLinks
          containerClassName={''}
          linkClassName={''}
          iconClassName={''}
        />

        <div></div>
      </div>
    </div>
  );
};

export default MobileMenu;
