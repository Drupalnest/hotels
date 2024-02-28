// import { useSelector, useDispatch } from "react-redux";
// import { Storage } from "../utils/storage";
// import { unlockPricing } from "../redux/actions";

// export const useUnlockDiscount = (rateType) => {
//   const dispatch = useDispatch();

//   const isLoggedIn = useSelector(state => state.member.isLoggedIn);

//   const hrDiscountUnlockedInStore = useSelector(state => state.show_special_pricing);
//   const hrDiscountUnlockedInStorage = Storage.GetLocalStorageValue('HR-discount-unlocked')

//   const showUnlockButton = rateType === 'member' && !isLoggedIn ;
//   const discountUnlocked = hrDiscountUnlockedInStore || hrDiscountUnlockedInStorage;
//   const showSpecialPricing = showUnlockButton && discountUnlocked

//   const setShowSpecialPricing = () => {
//     dispatch(unlockPricing(true));
//   }

//   return [showUnlockButton, discountUnlocked, showSpecialPricing, setShowSpecialPricing];
// }
