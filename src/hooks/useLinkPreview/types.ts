export type PreviewLink = {
  description: string
  title: string
  image: string
  url: string
}

export type MetaTags = {
  tag: MetaTagasEnum
  value: string
}

export enum MetaTagasEnum {
  description = 'og:description',
  title = 'og:title',
  image = 'og:image',
  url = 'og:url'
}
