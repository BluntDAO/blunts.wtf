import classes from './Footer.module.css';
import { Container } from 'react-bootstrap';
import { buildEtherscanAddressLink } from '../../utils/etherscan';
import { externalURL, ExternalURL } from '../../utils/externalURL';
import config from '../../config';
import Link from '../Link';
import { Trans } from '@lingui/macro';

const Footer = () => {
  const twitterURL = externalURL(ExternalURL.twitter);
  const farcasterUrl = externalURL(ExternalURL.farcaster);
  const telegramUrl = externalURL(ExternalURL.telegram);

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <footer className={classes.footerSignature}>
          <Link text={<Trans>Twitter</Trans>} url={twitterURL} leavesPage={true} />
          <Link text={<Trans>Farcaster</Trans>} url={farcasterUrl} leavesPage={true} />
          <Link text={<Trans>Telegram</Trans>} url={telegramUrl} leavesPage={false} />
        </footer>
      </Container>
    </div>
  );
};
export default Footer;