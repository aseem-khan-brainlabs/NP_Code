function page_type_DL(pageType_DL) {
  let data_path_DL = window.location.pathname;
  let response_DL = pageType_DL;

  // Prioritize exact string matches for accuracy
  if (pageType_DL === 'category') {
    if (data_path_DL.substring(6) === '/skincare/') {
      response_DL = 'skincare';
    } else if (data_path_DL.includes('/collections/the-absolute/')) {
      response_DL = 'theAbsolute';
    } else if (data_path_DL.includes('/collections/the-brilliant/')) {
      response_DL = 'theBrilliant';
    } else if (data_path_DL.includes('/collections/the-exceptional/')) {
      response_DL = 'theExceptional';
    } else if (data_path_DL.includes('/collections/the-elemental/')) {
      response_DL = 'theElemental';
    }
  } else if (pageType_DL === 'page') {
    if (
      [
        '/our-story/',
        '/our-philosophy/',
        '/our-sustainability/',
        '/our-philanthropy/',
        '/thinkbeautifully/',
      ].includes(data_path_DL.substring(6))
    ) {
      response_DL = 'ourBrand';
    } else if (
      [
        '/our-science-technology/',
        '/green-tech/',
        '/our-laboratory/',
        '/our-active-ingredients/',
        '/our-expertise/',
      ].includes(data_path_DL.substring(6))
    ) {
      response_DL = 'ourScience';
    } else if (data_path_DL.includes('/press/')) {
      response_DL = 'press';
    }
  } else {
    // Handle non-category/page cases (handle with care to avoid false positives)
    console.warn(`Unhandled page type: ${pageType_DL}`);
  }

  pushingDataLayer(response_DL);
}

let page_type_details = '{{page_type}}';

switch (page_type_details) {
  case 'default':
    pushingDataLayer('homepage');
    console.log('Home Case');
    break;
  case 'category':
    page_type_DL('category');
    console.log('Category Case');
    break;
  case 'page':
    page_type_DL('page');
    console.log('Page Case');
    break;
  default:
    pushingDataLayer(page_type_details);
    console.log(`Default Case: Using page_type_details: ${page_type_details}`);
    break;
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
