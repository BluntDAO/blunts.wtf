export enum ExternalURL {
  twitter,
  notion,
  discourse,
  nounsCenter,
  dao,
  mint,
  instagram,
  farcaster,
  telegram,
  discord,
}

export const externalURL = (externalURL: ExternalURL) => {
  switch (externalURL) {
    case ExternalURL.twitter:
      return 'https://twitter.com/bluntdao';
    case ExternalURL.notion:
      return 'https://bento.me/blunt';
    case ExternalURL.discourse:
      return 'https://forum.bluntdao.org/';
    case ExternalURL.nounsCenter:
      return 'https://docs.bluntdao.org/';
    case ExternalURL.dao:
      return 'https://docs.bluntdao.org/';
    case ExternalURL.mint:
      return 'https://docs.bluntdao.org/';
    case ExternalURL.instagram:
      return 'https://instagram.com/bluntdao/';
    case ExternalURL.discord:
      return 'https://discord.com/invite/e3cGSTzyWp/';
    case ExternalURL.farcaster:
      return 'https://warpcast.com/blunts';
    case ExternalURL.telegram:
      return 'https://t.me/+7VyjGDEf9xI5YzEx/';

  }
}