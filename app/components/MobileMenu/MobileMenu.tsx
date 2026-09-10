import SocialLinks from '../ui/SocialLinks/SocialLinks';
import Navigation from '../ui/Navigation/Navigation';

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
