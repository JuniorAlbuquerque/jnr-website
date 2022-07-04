import { forwardRef, RefObject, useEffect } from 'react'
import { ActionImpl, KBarPortal, KBarResults, useKBar, useMatches } from 'kbar'
import { Animator, GroupName, Item, Positioner, Search } from './styles'
import { useLocation } from 'react-router-dom'

type RenderItemProps = {
  item: ActionImpl
  active: boolean
  activeIndex: number
}

const RenderItem = forwardRef(
  ({ item, active, activeIndex }: RenderItemProps, ref) => {
    const { query } = useKBar()

    useEffect(() => {
      if (activeIndex !== -1) {
        console.log(activeIndex)
        query?.setActiveIndex(activeIndex)

        return
      }

      query?.setActiveIndex(1)
    }, [])

    return (
      <Item
        ref={ref as RefObject<HTMLDivElement>}
        variant={active ? 'active' : undefined}
      >
        <div className="label">
          {item?.icon && item?.icon}

          {item.name}
        </div>

        {item?.shortcut && item?.shortcut?.length > 0 && (
          <div className="shortcuts">
            {item?.shortcut?.map((shortcut, index) => (
              <kbd key={index}>{shortcut}</kbd>
            ))}
          </div>
        )}
      </Item>
    )
  }
)

function RenderResults() {
  const { results } = useMatches()
  const location = useLocation()

  const activeIndex = results?.findIndex(
    (item) =>
      typeof item !== 'string' &&
      location?.pathname?.includes(item?.name?.toLowerCase())
  )

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <GroupName>{item}</GroupName>
        ) : (
          <RenderItem item={item} active={active} activeIndex={activeIndex} />
        )
      }
    />
  )
}

const CommandBar: React.FC = () => {
  return (
    <KBarPortal>
      <Positioner>
        <Animator>
          <Search placeholder="Search" />
          <RenderResults />
        </Animator>
      </Positioner>
    </KBarPortal>
  )
}

export default CommandBar
