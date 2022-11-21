export interface HomepageResponse {
  introPart: IntroPart[][]
  mainPart: MainPart[]
}

export interface IntroPart {
  type: string
  moCode: string
  content: Content
}

export interface Content {
  bannerPlacement?: BannerPlacement
  categoryIds?: number[]
  YUSPenabled?: boolean
  title?: string
  items?: number
}

export interface BannerPlacement {
  placementCode: string
  placementName: string
  bannerPositions: BannerPosition[]
}

export interface BannerPosition {
  positionName: string
  positionIndex: number
  bannerDeployments: BannerDeployment[]
}

export interface BannerDeployment {
  deploymentId: number
  bannerName: string
  promoId: number
  promoName: string
  imgUrl: string
  destinationUrl: string
  shuffleable: boolean
  openInNewTab: boolean
}

export interface MainPart {
  type: string
  visible: string[]
  content: Content2
  moCode?: string
}

export interface Content2 {
  boxesRows?: BoxesRow[]
  title?: string
  bannerPlacement?: BannerPlacement2
  categoryIds?: number[]
  YUSPenabled?: boolean
  items: PhotoItem[]
  banner?: Banner
  titleUrl?: string
  boxes?: string[]
}

export interface BoxesRow {
  title: string
  operation: string
  url?: string
  classes: string
  icon?: string
}

export interface BannerPlacement2 {
  placementCode: string
  placementName: string
  bannerPositions: BannerPosition2[]
}

export interface BannerPosition2 {
  positionName: string
  positionIndex: number
  bannerDeployments: BannerDeployment2[]
}

export interface BannerDeployment2 {
  deploymentId: number
  bannerName: string
  promoId: number
  promoName: string
  imgUrl: string
  destinationUrl: string
  shuffleable: boolean
  openInNewTab: boolean
}

export interface Banner {
  side: string
  itemSpan: number
  bannerPlacement?: BannerPlacement3
}

export interface BannerPlacement3 {
  placementCode: string
  placementName: string
  bannerPositions: BannerPosition3[]
}

export interface BannerPosition3 {
  positionName: string
  positionIndex: number
  bannerDeployments: BannerDeployment3[]
}

export interface BannerDeployment3 {
  deploymentId: number
  bannerName: string
  promoId: number
  promoName: string
  imgUrl: string
  destinationUrl: string
  shuffleable: boolean
  openInNewTab: boolean
}

export interface BuyNowPriceObj {
  amount: number;
  currency: string;
}

export interface BiddingPriceObj {
  amount: number;
  currency: string;
}

export interface PriceWithShippingObj {
  amount: number;
  currency: string;
}

export interface Small {
  id: number;
  position: number;
  titleImage: boolean;
  url: string;
  size: string;
  thumbnailReady: boolean;
}

export interface Original {
  id: number;
  position: number;
  titleImage: boolean;
  url: string;
  size: string;
  thumbnailReady: boolean;
}

export interface Large {
  id: number;
  position: number;
  titleImage: boolean;
  url: string;
  size: string;
  thumbnailReady: boolean;
}

export interface Medium {
  id: number;
  position: number;
  titleImage: boolean;
  url: string;
  size: string;
  thumbnailReady: boolean;
}

export interface Lists {
  small: Small[];
  original: Original[];
  large: Large[];
  medium: Medium[];
}

export interface Images {
  lists: Lists;
}

export interface PhotoItem {
  endingTime: Date;
  id: number;
  name: string;
  aukroPlus: boolean;
  paymentOnline: boolean;
  buyNowPrice: number;
  biddingPrice: number;
  priceWithShipping: number;
  buyNowPriceObj: BuyNowPriceObj;
  biddingPriceObj: BiddingPriceObj;
  priceWithShippingObj: PriceWithShippingObj;
  freeShipping: boolean;
  images: Images;
  itemTypeEnumCode: string;
  seoUrl: string;
  paymentViaAukro: boolean;
  statusAdultContent: boolean;
}
