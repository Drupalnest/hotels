import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MyCheck from  "../MyCheck";
const Wrapper = styled.div`
    text-align: center;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    margin: 10px auto;
    padding: 25px;
    h5 {
      margin-bottom: 18px;
    }
`;

const PaymentMyCheck = (props) => {

  const {isLoggedIn, email} = useSelector((state) => {
    return {
      isLoggedIn: state.member.isLoggedIn,
      email: state.member.profile ? state.member.profile.email : null
    }
  });

  const [walletReady, setWalletReady] = useState(false);
  const [ccToken, setCCToken] = useState(null);

  const afterSelectCreditCard = (token) => {
    setCCToken(token)
    props.afterSelectCreditCard && props.afterSelectCreditCard(token);
  };

  const handleWalletReady = () => {
    setWalletReady(true);
    window.mycheckWallet.setGiftCardsInfo(false);
    props.onWalletReady && props.onWalletReady();
  };

  const handleWalletInit = () => {
    props.onWalletInit && props.onWalletInit();
  };

  const setGiftCard = (details) => {
    props.onGiftCardChange && props.onGiftCardChange(details);
  }

  const Heading = () => {
    return (
      <h4>
        PAYMENT INFORMATION
      </h4>
    )
  }

  return (
    <Wrapper>
      <MyCheck
        className={props.className}
        onWalletReady={handleWalletReady}
        onWalletInit={handleWalletInit}
        email={email}
        walletId="myc-wallet-profile"
      >
        <Heading />
        <section>
          <div id="myc-wallet-profile"/>
        </section>
      </MyCheck>
    </Wrapper>
  );
  // return (
  //   <Wrapper>
  //     <h4>PAYMENT INFORMATION</h4>
  //     <div id="myc-wallet-checkout"/>
  //     <div id="myc-wallet-modal"/>
  //     <div id="myc-wallet-modal-benefits-details"/>
  //
  //     {/*walletReady && <Button type="button" onClick={this.getCard}>Next</Button>*/}
  //     {/*walletReady && <Button type="button" onClick={handleSubmitPayment}>Next</Button>*/}
  //   </Wrapper>
  // );
};
export default PaymentMyCheck;
