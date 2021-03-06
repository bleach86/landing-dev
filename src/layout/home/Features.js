import React from 'react';

import SectionTitle from 'src/components/SectionTitle';
import FeatureBox from 'src/components/home/FeatureBox';

import Shield from 'src/assets/faShield.svg';
import Shuttle from 'src/assets/faSpaceShuttle.svg';
import Code from 'src/assets/faCode.svg';
import Polygon from 'src/assets/faPolygon.svg';

export default () => (
  <section className="features">
    <SectionTitle>
      Baked with our special ingredient, copy/paste&trade;
    </SectionTitle>
    <div className="subTitle">
      Hot out of the oven, and with a boast of features identical to and present
      in countless other cryptocurrencies.
    </div>
    <div className="featureBoxContainer">
      <FeatureBox icon={<Shield />} title="Secure">
        Garlicoin is like the deadbolt for door locks; it's secure and protects
        you from crypto-vampires. Blockchain tech makes it nearly impossible to
        run a brute-force attack and with our{' '}
        <span className="strike">advances</span> copy-and-pastes in wallet
        encryption, you can be moderately safe that your garlic bread isn't
        going anywhere.
      </FeatureBox>
      <FeatureBox icon={<Shuttle />} title="Blazing Fast">
        Garlicoin trading speed is <span className="strike">near instant</span>{' '}
        pretty fast. Never be inconvienienced again with slow transaction speeds
        and high rates!
      </FeatureBox>
      <FeatureBox icon={<Code />} title="Open Source">
        Wanna take a closer look at Garlicoin? Do it! Just like the other "cool"
        cryptocurrencies, you'll be sure to find just what makes us tick on our{' '}
        <a href="https://github.com/GarlicoinOrg">GitHub.</a>
      </FeatureBox>
      <FeatureBox icon={<Polygon />} title="Decentralized">
        If you're like us, you hate fiat currencies; slow, paper, and prone to
        inflation. Decentralized (as in Garlicoin) currencies like Bitcoin and
        Ethereum have a limited amount on market. 69 million Garlicoin will only
        ever be available on market.
      </FeatureBox>
    </div>
  </section>
);
