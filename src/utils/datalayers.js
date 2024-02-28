import differenceInDays from 'date-fns/differenceInDays';


export const addToCartGTMDataLayer = (hotel, room, rate, price, checkin, checkout) => {
  const totalNights = differenceInDays(new Date(checkout), new Date(checkin));
  let brandName = hotel.relationships && hotel.relationships.brand_id && hotel.relationships.brand_id.name;

  window.dataLayer && window.dataLayer.push({
    'event': 'addToCart',
    'ecommerce': {
      'currencyCode': 'USD',
      'add': {
        'products': [{
          'name': hotel.name,//`${hotel.name} -- ${room.Name}`,
          'variant': room.Name,
          'price': price,
          'brand': brandName,
          'category': rate.RateCode,
          'quantity': totalNights
         }]
      }
    }
  });
}

export const checkoutStep1GTMDataLayer = (hotel, rooms, checkin, checkout) => {
  const totalNights = differenceInDays(new Date(checkout), new Date(checkin));
  let brandName = hotel.relationships && hotel.relationships.brand_id && hotel.relationships.brand_id.name;
  let products = [];

  rooms.forEach(function (r) {
    const rate = r.rate;
    r.room && rate && products.push({
      'name': r.room.Name,
      'price': rate.Subtotal,
      'brand': brandName,
      'category': rate.RateCode,
      'quantity': totalNights
    })
  });

  window.dataLayer && window.dataLayer.push({
    'event': 'checkout',
    'ecommerce': {
      'checkout': {
        'actionField': {'step': 1, 'option': 'All'},
        'products': products
      }
    }
  });
}

export const checkoutStep2GTMDataLayer = (hotel, rooms, checkin, checkout, payment) => {
  const totalNights = differenceInDays(new Date(checkout), new Date(checkin));
  let brandName = hotel.relationships && hotel.relationships.brand_id && hotel.relationships.brand_id.name;
  let products = [];
  let applyBucks = payment ? !!payment.with_giftcards : false;
  let bucksAmount = payment ? parseFloat(payment.giftcard_amount) : 0;

  rooms.forEach(function (r) {
    let rate = r.rate;
    if(rate && rate.Subtotal) {
      let roomCost = parseFloat(rate.Subtotal);
        if(applyBucks && bucksAmount > 0 && roomCost > 0) {
          if(bucksAmount <= roomCost) {
            roomCost = roomCost - bucksAmount
            bucksAmount = 0;
          } else {
            bucksAmount = bucksAmount - roomCost;
            roomCost = 0;
          }
        }
        r.room && products.push({
          'name': r.room.Name,
          'price': roomCost,
          'brand': brandName,
          'category': rate.RateCode,
          'quantity': totalNights
        })
    }

  });

  window.dataLayer && window.dataLayer.push({
    'event': 'checkout',
    'ecommerce': {
      'checkout': {
        'actionField': {'step': 2, 'option': 'All'},
        'products': products
      }
    }
  });
}

export const resConfirmationGTMDataLayer = (res, hotel, hotelBrand) => {
    let isNewBooking = true;
    if(res) {
      // check if it's new booking or just page refresh
      if(localStorage['gtmLastReservationId']) {
        res.forEach((r, i) => {
          if(r.crs_reservation_id == localStorage['gtmLastReservationId']) {
            isNewBooking = false;
          }
        });
      }
      // set gtm globals only if it's new booking.
      if(isNewBooking) {
        let resDetail = res[0].details;
        let address = hotel.address;
        window.rlPAGENAME = 'reservation-confirmation';
        window.rlPROPERTYCODE = resDetail.HotelCode;
        window.rlPROPERTYNAME = hotel.name;
        window.rlCITY         = address.locality;
        window.rlSTATE        = address.administrative_area_name;
        window.rlZIPCODE      = address.postal_code;
        window.rlCOUNTRY      = address.country_code;
        window.rlCURRENCYCODE = 'USD';


        let numNights = differenceInDays(new Date(resDetail.End), new Date(resDetail.Start));
        let roomTotal = 0,
            totalTax  = 0,
            totalUpgrades = 0;
        localStorage['gtmLastReservationId'] = res[0].crs_reservation_id;

        res.forEach((r, rIndex) => {
          let rDetail = r.details;
          let payment = {
            Subtotal: 0,
            Upgrades: 0,
            Taxes: 0,
            Total: 0
          };
          rDetail.RoomRates.forEach((item, i) => {
            payment.Subtotal += item.Subtotal ? parseFloat(item.Subtotal) : 0;
            payment.Upgrades += item.Upgrades ? parseFloat(item.Upgrades) : 0;
            payment.Taxes += item.Taxes ? parseFloat(item.Taxes) : 0;
            payment.Total += item.Total ? parseFloat(item.Total) : 0;
          });


          window['rlCONFIRMATIONNUMBER_'+rIndex] = r.crs_reservation_id;

          window['rlARRIVAL_'+rIndex]   = rDetail.Start;
          window['rlDEPARTURE_'+rIndex] = rDetail.End;
          window['rlRATEPLAN_'+rIndex]  = rDetail.RatePlanCode;
          window['rlROOMTYPE_'+rIndex]  = rDetail.RoomTypeCode;
          window['rlROOMNAME_'+rIndex]  = rDetail.RoomDescription && rDetail.RoomDescription.Name;

          window['rlNUMNIGHTS_'+rIndex] = numNights;
          window['rlADULTS_'+rIndex]    = rDetail.Count.Adult;
          window['rlCHILDREN_'+rIndex]  = rDetail.Count.Children || 0;

           window['rlROOMRATE_'+rIndex]           = payment.Subtotal;
           window['rlADDONVALUE_'+rIndex]         = payment.Upgrades;
           window['rlTAX_'+rIndex]                = payment.Taxes;
           window['rlTOTALRATEWITHTAXESADDON_'+rIndex] = payment.Total;
           window['rlADR_'+rIndex]                = parseFloat(payment.Subtotal / numNights).toFixed(2);

          roomTotal         += parseFloat(payment.Subtotal);
          totalTax          += parseFloat(payment.Taxes);
          totalUpgrades     += parseFloat(payment.Upgrades);
        })


        window.rlNUMROOMS = res.length;

        window.rlTOTALNUMNIGHTS          = numNights * window.rlNUMROOMS;
        window.rlTOTALROOMCOST           = roomTotal;
        window.rlTOTALTAX                = totalTax;
        window.rlTOTALADDON              = totalUpgrades;
        window.rlTOTALCOSTWITHTAXESADDON = roomTotal + totalTax + totalUpgrades;
        window.rlTOTALROOMADDONS         = roomTotal + totalUpgrades;
        window.rlTOTALADR                = parseFloat(window.rlTOTALROOMCOST / window.rlTOTALNUMNIGHTS).toFixed(2);


        if( process.env.NODE_ENV == 'production' && gtag) {
          gtag('event', 'conversion', { 'send_to': 'AW-1010172688/8DxfCKrX0GkQkIbY4QM',
            'value': window.rlTOTALROOMADDONS,
            'currency': window.rlCURRENCYCODE,
            'transaction_id': window.rlCONFIRMATIONNUMBER_0
          });
        }

        let products = [];

        for (let i = 0; i < window.rlNUMROOMS; i++) {
        let product = {};
          product.name = window['rlPROPERTYNAME'];
          product.id = window['rlCONFIRMATIONNUMBER_'+ i];
          product.sku = window['rlCONFIRMATIONNUMBER_'+ i];
          product.category = window['rlRATEPLAN_'+ i];
          product.brand = hotelBrand?.name;
          product.brand_code = hotelBrand?.code;
          product.price = window['rlROOMRATE_'+ i]/window['rlNUMNIGHTS_'+ i];
          product.quantity = window['rlNUMNIGHTS_'+ i];
          products.push(product);
        }

        window.dataLayer && window.dataLayer.push({
              "ecommerce": {
              "currencyCode":window.rlCURRENCYCODE,
              "purchase": {
                "actionField":{
                            "id": window.rlCONFIRMATIONNUMBER_0,
                            "affiliation": 'Red Lion Hotels',
                            "revenue": window.rlTOTALROOMADDONS,
                            "tax": window.rlTOTALTAX},
             "products":products}},
            "event":"confirmation"});
      }
    }
  }

  export const addPropertyRoomsGTMDataLayer = (hotel, hotelRooms, search) => {
    let brandName = hotel.relationships && hotel.relationships.brand_id && hotel.relationships.brand_id.name;

    const { checkin, checkout, discount, distance, groupCode, promotionCode, searchString, rooms } = search;

    if(!window.dataLayer) {
      window.dataLayer = [];
    }

    hotelRooms.forEach((room, i) => {
      if(room.Availability > 0) {

        window.dataLayer.push({
          'event': 'AvailableRoom',
          'ecommerce': {
            'hotel': hotel.name,
            'brand': brandName,
            'search': {
              'searchString': searchString,
              'checkin': checkin,
              'checkout': checkout,
              'rooms': rooms,
              'discount': discount,
              'distance': distance,
              'groupCode': groupCode,
              'promotionCode': promotionCode
            },
            roomName: room.Name,
          }
        });
      } else {
        window.dataLayer.push({
          'event': 'SoldoutRoom',
          'ecommerce': {
            'hotel': hotel.name,
            'brand': brandName,
            'search': {
              'searchString': searchString,
              'checkin': checkin,
              'checkout': checkout,
              'rooms': rooms,
              'discount': discount,
              'distance': distance,
              'groupCode': groupCode,
              'promotionCode': promotionCode
            },
            roomName: room.Name,
          }
        });
      }
    });

  }

  export const addHotelsAvailabilityGTMDataLayer = (hotel, search, soldout) => {
    const { checkin, checkout, discount, distance, groupCode, promotionCode, searchString, rooms, amenities, brands } = search;


    if(!window.dataLayer) {
      window.dataLayer = [];
    }
    const eventName = soldout ? 'SoldOutProperty' : 'AvailableProperty';
    window.dataLayer.push({
      'event': eventName,
      'ecommerce': {
        'search': {
          'searchString': searchString,
          'checkin': checkin,
          'checkout': checkout,
          'rooms': rooms,
          'discount': discount,
          'distance': distance,
          'groupCode': groupCode,
          'promotionCode': promotionCode,
          'amenitiesFilter': amenities,
          'brandFilter': brands
        },
        'name': hotel.name,
        'brand': hotel.brand
      },
    });

  }

  export const addProductImpressionGTMDataLayer = (hotelList, search) => {
    let products = [];

    hotelList.forEach((hotel, i) => {
      products.push({
        'name': hotel.name,
        'list': search.searchString,
        'category': null,
        'brand': hotel.brand,
        'price': null,
        'position': i + 1,
      });

    });

    if(!window.dataLayer) {
      window.dataLayer = [];
    }

    window.dataLayer.push({
      'event': "product list impressions",
      'ecommerce': {
        'currencyCode': "USD",
        'impressions': products,
      },
    });
  }
