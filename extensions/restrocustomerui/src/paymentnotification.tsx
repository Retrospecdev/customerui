import {
  reactExtension,
  Banner,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.profile.company-location-addresses.render-after',
  () => <Extension />,
);

function Extension() {
  return (
    <Banner
      status="critical"
      title="STOP!!! Do not input payment information in the web portal. Shopify has not made it possible to hide this area, but entering payment here may result in you being charged in error. For all payment matters, please email your rep or AR@Retrospec.com. Payments are not handled in this portal!"
    />
  );
}

