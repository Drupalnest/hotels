import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getRefreshToken } from "../apis/mycheck";
import { useScript } from "../hooks/useScript";
import styled from "styled-components";

const myCheckScript = process.env.GATSBY_MyCheckScript;

const Wrapper = styled.div`
  // #myc-wallet-checkout {
    div {
      z-index: 22;

    }
    .select-field__menu {
      z-index: 23;
      position: unset;
    }

  // }

`;

/* {email, heading, onWalletInit, onWalletReady, afterSelectCreditCard, onGiftCardChange} */
const MyCheck = (props) => {

  const {isLoggedIn, email} = useSelector((state) => {
    let _isLoggedIn = state.member.isLoggedIn;
    if(_isLoggedIn) {
      let profileEmail = state.member.profile && state.member.profile.email;
      if(profileEmail && profileEmail != props.email) {
        _isLoggedIn = false;
      }
    }
    return {
      isLoggedIn: _isLoggedIn,
      email: _isLoggedIn ? props.email : ''
    }
  });

  const [loaded, error] = useScript(myCheckScript);
  // const [walletReady, setWalletReady] = useState(false);
  // const [ccToken, setCCToken] = useState(null);

  useEffect(() => {
    (async () => {
      if (loaded && !error) {
        const refreshToken = await getRefreshToken(email);
        await initializeMycheck(refreshToken);
      }
    })();
    return () => {
      if (window.mycheckWallet !== undefined) {
        window.mycheckWallet.destroy();
      }
    }
  }, [isLoggedIn, loaded]);

  const handleAfterSelectCreditCard = (token) => {
    // setCCToken(token)
    props.afterSelectCreditCard && props.afterSelectCreditCard(token);
  };

  const handleWalletReady = () => {
    window.mycheckWallet.setGiftCardsInfo(isLoggedIn);
    // setWalletReady(true);
    props.onWalletReady && props.onWalletReady();
  };

  const handleWalletInit = () => {
    props.onWalletInit && props.onWalletInit();
  };

  const handleGiftCardChange = (details) => {
    props.onGiftCardChange && props.onGiftCardChange(details);
  }

  const initializeMycheck = (refreshToken) => {
    if (undefined !== window.mycheckWallet) {
    console.log('wallet is initiating...');

      window.mycheckWallet.init(props.walletId, {
        //  template : 'checkoutScreen',
        // manageElement: '#myc-wallet-modal',
        publishableKey: process.env.GATSBY_MYCHECK_KEY,
        refreshToken: refreshToken,
        acceptedCards: ['visa', 'mastercard', 'amex', 'diners', 'discover', 'jcb', 'maestro'],
        local: "en",
        // acceptedAlternativeWallets: ['googlepay'],
        events: {
          onInit: handleWalletInit,
          onReady: handleWalletReady,
          userData: (data) => console.log('user data is:', data),
          giftCardTrigger: (details) => handleGiftCardChange(details),
          afterSelectCreditCard: handleAfterSelectCreditCard

        },
        custom: {
          creditCardFormPlaceholders: {
            CREDIT_CARD_NO: '6457 1008 2986 1400',
            CVV: '123',
            ZIP: '12345'
          },
          hideWalletButtons: !isLoggedIn,
          hideGiftCardsInfo: !isLoggedIn,
          gcAmountToApply: true,
          gcUnckeckedByDefault: true
        }
      });
    }
  };

  return (
    <Wrapper className={`${props.className}`}>
      {props.children}
    </Wrapper>
  );
};
export default MyCheck;
