import {
  healthcareUrl,
  hospitalityUrl,
  informationTechnologyUrl,
  infrastructureUrl,
  newsCenterUrl,
  renewableEnergyUrl,
  sportsUrl,
} from "../components/helpers/constant-words";
import { images } from "../images";

export const bannerData = [
  {
    img: images.hospitalityBanner.image,
    mbImg: images.hospitalityBannerMb.image,
    alt: images.hospitalityBanner.alt,
    title: "Hospitality",
    desc: "Transforming the hospitality landscape with luxurious and innovative hotel experiences.",
    link: hospitalityUrl,
  },
  {
    img: images.itBanner.image,
    mbImg: images.itBannerMb.image,
    alt: images.itBanner.alt,
    title: "Information Technology ",
    desc: "Delivering innovative and scalable IT solutions that are meticulously tailored to address the diverse needs of businesses across various industries.",
    link: informationTechnologyUrl,
  },
  {
    img: images.healthcareBanner.image,
    mbImg: images.healthcareBannerMb.image,
    alt: images.healthcareBanner.alt,
    title: "Healthcare",
    desc: "Dedicated to pioneering advancements in healthcare, currently focusing on establishing a state-of-the-art cancer hospital.",
    link: healthcareUrl,
  },
  {
    img: images.infraBanner.image,
    mbImg: images.infraBannerMb.image,
    alt: images.infraBanner.alt,
    title: "Infrastructure",
    desc: "Owning and expanding high-quality real estate assets, including corporate parks, with strategic plans for further acquisitions.",
    link: infrastructureUrl,
  },
  {
    img: images.sportsBanner.image,
    mbImg: images.sportsBannerMb.image,
    alt: images.sportsBanner.alt,
    title: "Sports",
    desc: "Fostering sporting excellence through ownership of premier cricket franchises and elite sports clubs.",
    link: sportsUrl,
  },
  {
    img: images.renewableEnergyBanner.image,
    mbImg: images.renewableEnergyBannerMb.image,
    alt: images.renewableEnergyBanner.alt,
    title: "Renewable Energy",
    desc: "Leading the charge towards a sustainable future with cutting-edge renewable energy initiatives and services.",
    link: renewableEnergyUrl,
  },
];

export const counterData = [
  {
    type: "image",
    id: 1,
    img: images.counter01.image,
    alt: images.counter01.alt,
    title: "SECTORS <br/> PRESENT",
    numb: "06",
  },
  {
    id: 2,
    img: images.counter02.image,
    alt: images.counter02.alt,
    title: "IMPACTING <br/> LIVES",
    numb: "1M",
  },
  {
    id: 3,
    img: images.counter03.image,
    alt: images.counter03.alt,
    title: "SECTORS <br/> PRESENT",
    numb: "06",
  },
  {
    id: 4,
    img: images.counter04.image,
    alt: images.counter04.alt,
    title: "IMPACTING <br/> LIVES",
    numb: "1M",
  },
];

export const newsData = [
  {
    id: 1,
    img: images.newsPress.image,
    alt: images.newsPress.alt,
    title: "Press Release",
    desc: "Stay informed with the latest updates and announcements from SanRaj Group through our official press releases.",
    link: newsCenterUrl+"#press",
    // type: "external-link",
  },
  {
    id: 2,
    img: images.newsAwards.image,
    alt: images.newsAwards.alt,
    title: "Awards",
    desc: "Explore SanRaj Group's distinguished recognitions and accolades, celebrating excellence and innovation across our diverse business ventures.",
    link: newsCenterUrl+"#awards",
    // type: "external-link",
  },
  {
    id: 3,
    img: images.newsMedia.image,
    alt: images.newsMedia.alt,
    title: "Media Mentions",
    desc: "Discover how SanRaj Group's achievements and initiatives are highlighted in prominent media outlets, reflecting our impact across various industries.",
    link: newsCenterUrl+"#media",
    // type: "external-link",
  },
];

export const accordionListItems = [
  {
    id: 1,
    mainTitle: "Hospitality",
    img: images.hospitality.image,
    mbImg: images.hospitalityMb.image,
    alt: images.hospitality.alt,
    desc: [
      "Transforming the hospitality landscape with luxurious and innovative hotel experiences.",
    ],
    url: hospitalityUrl,
  },
  {
    id: 2,
    mainTitle: "IT",
    img: images.it.image,
    mbImg: images.itMb.image,
    alt: images.it.alt,
    desc: [
      "Delivering innovative and scalable IT solutions that are meticulously tailored to address the diverse needs of businesses across various industries.",
    ],
    url: informationTechnologyUrl,
  },
  {
    id: 3,
    mainTitle: "Healthcare",
    img: images.healthcare.image,
    mbImg: images.healthcareMb.image,
    alt: images.healthcare.alt,
    desc: [
      "Dedicated to pioneering advancements in healthcare, currently focusing on establishing a state-of-the-art cancer hospital.",
    ],
    url: healthcareUrl,
  },
  {
    id: 4,
    mainTitle: "Infrastructure",
    img: images.infrastructure.image,
    mbImg: images.infrastructureMb.image,
    alt: images.infrastructure.alt,
    desc: [
      "Owning and expanding high-quality real estate assets, including corporate parks, with strategic plans for further acquisitions.",
    ],
    url: infrastructureUrl,
  },
  {
    id: 5,
    mainTitle: "Sports",
    img: images.sports.image,
    mbImg: images.sportsMb.image,
    alt: images.sports.alt,
    desc: [
      "Fostering sporting excellence through ownership of premier cricket franchises and elite sports clubs.",
    ],
    url: sportsUrl,
  },
  {
    id: 6,
    mainTitle: "Renewable Energy",
    img: images.renewableEnergy.image,
    mbImg: images.renewableEnergyMb.image,
    alt: images.renewableEnergy.alt,
    desc: [
      "Leading the charge towards a sustainable future with cutting-edge renewable energy initiatives and services.",
    ],
    url: renewableEnergyUrl,
  },
];
