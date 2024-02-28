// paragraphHelpers.js
import React from "react";
import { ParagraphPageBanner } from "../components/paragraphs/ParagraphPageBanner";
import { ParagraphPageIntro } from "../components/paragraphs/ParagraphPageIntro";
import { ParagraphFeaturedDestinations } from "../components/paragraphs/ParagraphFeaturedDestinations";
import { ParagraphPageTeaser } from "../components/paragraphs/ParagraphPageTeaser";
import { ParagraphFooterCta } from "../components/paragraphs/ParagraphFooterCta";
import { ParagraphMembershipBenefits } from "../components/paragraphs/ParagraphMembershipBenefits";
import { ParagraphPartnershipBrands } from "../components/paragraphs/ParagraphPartnershipBrands";
import { ParagraphFrequentlyAskedQuestions } from "../components/paragraphs/ParagraphFrequentlyAskedQuestions";
import { ParagraphTeaserList } from "../components/paragraphs/ParagraphTeaserList";
import { ParagraphHistory } from "../components/paragraphs/ParagraphHistory";
import { ParagraphMediaCta } from "../components/paragraphs/ParagraphMediaCta";
import { ParagraphOffers } from "../components/paragraphs/ParagraphOffers";
import { ParagraphPhotoGallery } from "../components/paragraphs/ParagraphPhotoGallery";
import { ParagraphSiteOffers } from "../components/paragraphs/ParagraphSiteOffers";
import { ParagraphFeaturedOffers } from "../components/paragraphs/ParagraphFeaturedOffers";
import { ParagraphFeaturedProperties } from "../components/paragraphs/ParagraphFeaturedProperties";
import { ParagraphMediaTiles } from "../components/paragraphs/ParagraphMediaTiles";
import { ParagraphOurBrands } from "../components/paragraphs/ParagraphOurBrands";
import { ParagraphOurBrandsTeasers } from "../components/paragraphs/ParagraphOurBrandsTeasers";
import { ParagraphBookNowBanner } from "../components/paragraphs/ParagraphBookNowBanner";
import { ParagraphSupportTiles } from "../components/paragraphs/ParagraphSupportTiles";
import { ParagraphHelloRewardsBanner } from "../components/paragraphs/ParagraphHelloRewardsBanner";
import { ParagraphMobileCta } from "../components/paragraphs/ParagraphMobileCta";

const components = {
  paragraph__page_banner: ParagraphPageBanner,
  paragraph__page_intro: ParagraphPageIntro,
  paragraph__featured_destinations: ParagraphFeaturedDestinations,
  paragraph__page_teaser: ParagraphPageTeaser,
  paragraph__footer_cta: ParagraphFooterCta,
  paragraph__membership_benefits: ParagraphMembershipBenefits,
  paragraph__partnership_brands: ParagraphPartnershipBrands,
  paragraph__frequently_asked_questions: ParagraphFrequentlyAskedQuestions,
  paragraph__teaser_list: ParagraphTeaserList,
  paragraph__history: ParagraphHistory,
  paragraph__offers: ParagraphOffers,
  paragraph__media_cta: ParagraphMediaCta,
  paragraph__photo_gallery: ParagraphPhotoGallery,
  paragraph__site_offers: ParagraphSiteOffers,
  paragraph__featured_offers: ParagraphFeaturedOffers,
  paragraph__featured_properties: ParagraphFeaturedProperties,
  paragraph__media_tiles: ParagraphMediaTiles,
  paragraph__our_brands: ParagraphOurBrands,
  paragraph__our_brands_teasers: ParagraphOurBrandsTeasers,
  paragraph__book_now_banner: ParagraphBookNowBanner,
  paragraph__support_tiles: ParagraphSupportTiles,
  paragraph__hello_rewards_banner: ParagraphHelloRewardsBanner,
  paragraph__mobile_cta: ParagraphMobileCta
};

export const getParagraph = (node, props) => {
  if (components.hasOwnProperty(node.type) && node.hasOwnProperty('id')) {
    const ParagraphComponent = components[node.type];
    return <ParagraphComponent key={node.id} node={node} paragraphtype={node.type} {...props}/>;
  }
  return null;
};
