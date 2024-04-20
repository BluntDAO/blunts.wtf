import classes from './NounsIntroSection.module.css';
import Section from '../../layout/Section';
import { Col, Image, Row } from 'react-bootstrap';
import { Trans } from '@lingui/macro';
import bluntImg1 from '../../assets/blunts-1.jpg';
import bluntImg2 from '../../assets/blunts-2.jpg';
import bluntImg4 from '../../assets/blunts-4.jpg';

import Noun from '../Noun';

const NounsIntroSection = () => {
  return (
    <>
      <Section fullWidth={false} className={classes.videoSection}>
        <Col lg={6}>
          <div className={classes.textWrapper}>
            <h1>
              <Trans>The treasury for your local sesh</Trans>
            </h1>
            <p>
              <Trans>
              BluntDAO is the the biggest IRL onboarding movement to Web3 via Proof of Sesh through local IRL OGs. We are now introducing the unlimited sesh fund, a regular re-up mechanism where anyone can request ETH to host a sesh from contributors. Onboarding the next million, 1 blunt/sesh at a time.
                For 2+ years we have been doing BlutnDAO (also JointsDAO & SpliffDAO) for free. Now
                in year 3: we are on the path to scale: unlimited sesh. A replenishing treasury for
                holders to vote on global requests for sesh.
              </Trans>
            </p>
          </div>
        </Col>
        <Col lg={6} className={`order-lg-1 order-2`}>
          <Image src={bluntImg2} alt="Blunt" className={classes.imageClass} />
        </Col>
      </Section>
      <Section fullWidth={false} className={classes.videoSection}>
        <Col lg={6} className={`order-lg-1 order-2`}>
          <Image src={bluntImg1} alt="Blunt" className={classes.imageClass} />
        </Col>

        <Col lg={6} className={`order-lg-2 order-1`}>
          <div className={`${classes.textWrapper} ${classes.youtubeSectionText}`}>
            <h1>
              <Trans>Background</Trans>
            </h1>
            <p>
              <Trans>Over 2 years ago, we started started on Solana, with a  simple mission, lets give a NFT to everyone we smoke with IRL and call it Proof of Sesh. We did it for free and went on multiple world tours out of pocket. We smoked thousands of people out with our OG validators, creating more OG validators. We expanded to more than just Blunts, and became SpliffDAO and JointsDAO, and even expanded to other chains. We built account abstracted mechanisms, met the dopest people in Web3, and built community. Although we lived up to the job of making sure Blunts got smoked, the problem is, coordinating a bunch of stoners globally with no incentives and having them do on-chain actions at events is hard, especially when everyone is high. This is why in year 3, we are on the path to scale: unlimited sesh. A replenishing treasury for holders to vote on global requests for sesh.
              </Trans>
            </p>
          </div>
        </Col>
      </Section>

      <Section fullWidth={false} className={classes.iosSection}>
        <Col lg={6}>
          <div className={classes.textWrapper}>
            <h1>
              <Trans>Mission </Trans>
            </h1>
            <h3>
              <Trans>
                We make sure blunts get smoked. 
              </Trans>
            </h3>
            <p>
              <Trans>Ask yourself? What does a Blunt want you to do to it? --- Smoke it. And in this essence this is what BluntDAO is living up to . The mission to make sure blunts get smoked. And we use blockchain for stuff.
              </Trans>
            </p>
          </div>
        </Col>
        <Col lg={6} className={classes.iosImgContainer}>
          <img src={bluntImg4} className={classes.iosImg} alt="nouns ios" />
        </Col>
      </Section>
    </>
  );
};

export default NounsIntroSection;