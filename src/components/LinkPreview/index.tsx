import { useLinkPreview } from '@/hooks/useLinkPreview'
import { FC, Fragment } from 'react'
import IconLink from '../icons/Link'
import Shimmer from '../Shimmer'
import { styles } from './styles'

type LinkPreviewProps = {
  url: string
  imgSrc?: string
  description?: string
  showLoading?: boolean
}

const Skeleton = () => (
  <div className={styles.shimmer()}>
    <Shimmer height="26rem" />

    <div className="texts">
      <Shimmer width="90%" height="1.5rem" />
      <Shimmer width="90%" height="1.5rem" />
      <Shimmer width="90%" height="1.5rem" />
    </div>
  </div>
)

const LinkPreview: FC<LinkPreviewProps> = ({
  url,
  imgSrc,
  description,
  showLoading
}) => {
  const { previewLinkData, isLoading } = useLinkPreview(url)

  const img = imgSrc ? imgSrc : previewLinkData?.image

  return (
    <div className={styles.root()}>
      {isLoading || showLoading ? (
        <Skeleton />
      ) : (
        <Fragment>
          <div className="image-preview">
            <img src={img} alt="SITE_IMAGE" />
          </div>

          <div className={styles.previewContent()}>
            <p className="title">{previewLinkData?.title}</p>
            <p className="description">
              {previewLinkData?.description
                ? previewLinkData?.description
                : description}
            </p>

            <div className="url">
              <IconLink />
              <a href={previewLinkData?.url}>{previewLinkData?.url}</a>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default LinkPreview
