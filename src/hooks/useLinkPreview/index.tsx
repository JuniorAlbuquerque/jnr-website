import axios from 'axios'
import { load } from 'cheerio'
import { useCallback, useEffect, useState } from 'react'
import { MetaTagasEnum, MetaTags, PreviewLink } from './types'

const proxyUrl = 'https://thingproxy.freeboard.io/fetch'

export function useLinkPreview(url: string) {
  const [previewLinkData, setPreviewLinkData] = useState<PreviewLink>(null)
  const [isLoading, setIsLoading] = useState(false)

  const getPreviewData = (metTags: MetaTags[]) => {
    const previewData = metTags?.reduce(
      (acc, item) => {
        switch (item.tag) {
          case MetaTagasEnum.description:
            acc.description = item.value
            break
          case MetaTagasEnum.title:
            acc.title = item.value
            break
          case MetaTagasEnum.image:
            acc.image = item.value
            break
          case MetaTagasEnum.url:
            acc.url = item.value
            break
          default:
            break
        }

        return acc
      },
      {
        description: '',
        image: '',
        title: '',
        url: ''
      } as PreviewLink
    )
    setPreviewLinkData(previewData)
  }

  const parseHtml = (html: string) => {
    const metaTags: MetaTags[] = []
    const htmlContent = load(html)
    htmlContent('head meta').map((i, item) => {
      if (!item.attribs) return null
      if (!item.attribs.property) return null
      if (!item.attribs.content) return null

      const property = item.attribs.property as MetaTagasEnum
      const content = item.attribs.content

      metaTags.push({
        tag: property,
        value: content
      })
    })

    getPreviewData(metaTags)
  }

  const getDataFromUrl = useCallback(async () => {
    setIsLoading(true)
    const response = await axios.get(`${proxyUrl}/${url}`)

    parseHtml(response.data)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getDataFromUrl()
  }, [])

  return {
    isLoading,
    previewLinkData
  }
}
