let page_type_details = '{{page_type}}';

if (page_type_details) {
  pushingDataLayer(page_type_details);
  console.log(`Default Case: Using page_type_details: ${page_type_details}`);
}

function pushingDataLayer(pagetyperes) {
  let user_id = '{{customer.id}}';
  const store_currency = '{{currency_selector.active_currency_code}}';
  const store_country = '{{settings.country_code}}';
  const region_code = '{{settings.region_code}}';

  if (user_id === '') {
    user_id = undefined;
  }
  const dl_ob = {
    pageType: pagetyperes,
    user_id: user_id,
    store_currency: store_currency,
    store_country: store_country,
    region_code: region_code,
  };
  console.log(dl_ob);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(dl_ob);
}
