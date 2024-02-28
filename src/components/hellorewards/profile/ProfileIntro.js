import React from "react";
import {useSelector} from "react-redux";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Title2, Title5 } from "../../styles/theme";

const ProfileIntro = (props) => {
  const crmProfile = useSelector((state) => {
    let member = state.member;
    return member && member.isLoggedIn ? member.crmProfile : null;
  });

  return <>
      {crmProfile && (
        <div className="text-center text-lg-left">
          <Title2 className="mb-4">Hello {crmProfile.first_name}</Title2>
          <Title5 className="d-inline">Member Number: </Title5><span> {crmProfile.membershipnumber}</span>
          <StaticImage
            src={'../../../images/profile-banner.png'}
            alt={'HR Banner'}
            className="mt-4 rounded"
            style={{ cursor: 'pointer'}}
            onClick={() => navigate("/hellorewards")}
          />
        </div>
      )}
  </>;
};
export default ProfileIntro;
