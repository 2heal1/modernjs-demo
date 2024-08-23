import './index.css';
import { VersionDisplay } from 'external-package-version-display';
import { VersionDisplay as VersionDisplay2 } from 'external-package-version-display-2';

const Index = () => {
  return (
    <div className="container-box">
      <div>Modern.js Stream SSR</div>
      <VersionDisplay />
      <VersionDisplay2 />
      {/* <RemoteSSRComponent /> */}
      {/* <DynamicRemoteSSRComponents /> */}
    </div>
  );
};

export default Index;
