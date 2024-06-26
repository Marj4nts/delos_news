export type ApiResponseType = {
  url: string;
  adx_keywords: string;
  subsection: string;
  column: string;
  eta_id: number;
  section: string;
  id: number;
  asset_id: number;
  nytdsection: string;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  published_date: string;
  source: string;
  updated: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media?: {
    type: string;
    subtype: string;
    caption: string;
    copyright: string;
    approved_for_syndication: number;
    "media-metadata": {
      url: string;
      format: string;
      height: number;
      width: number;
    }[];
  }[];
  uri: string;
};
