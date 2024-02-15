import {
  reactExtension,
  Banner,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.profile.company-location-addresses.render-after',
  () => <Extension />,
);

function Extension() {
  return <Banner>{('Please dont add any payment method we will send you invoice via our own method')}</Banner>;
}
