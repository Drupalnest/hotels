import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../utils/auth";
import { clearMember } from "../redux/actions";
const Storage = require('../utils/storage').Storage;

export default function useAuthenticate() {
  const dispatch = useDispatch();
  const memberLoggedIn = useSelector(state => state.member.isLoggedIn);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authLastCheckTimeCacheKey = "c_alct";
  useEffect(() => {

    const checkAuthentication = async () => {
        const authenticated = await auth.isAuthenticated();
        Storage.SetLocalStorageValue(authLastCheckTimeCacheKey, authenticated, 6 * 60 * 1000);//expiry time 6 min
        if (!authenticated) {
          await dispatch(clearMember());
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
    };

    if(memberLoggedIn) {
      let isAuthenticatedFromCache = Storage.GetLocalStorageValue(authLastCheckTimeCacheKey);
      if(!isAuthenticatedFromCache) {
        checkAuthentication();
      } else {
        setIsAuthenticated(isAuthenticatedFromCache);
      }
    } else {
      setIsAuthenticated(false);
    }

  }, [memberLoggedIn, isAuthenticated]);

  return isAuthenticated;
}
