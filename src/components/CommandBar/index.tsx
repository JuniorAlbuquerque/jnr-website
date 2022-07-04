import { forwardRef, RefObject } from 'react'
import { ActionImpl, KBarPortal, KBarResults, useMatches } from 'kbar'
import { Animator, GroupName, Item, Positioner, Search } from './styles'

type RenderItemProps = {
  item: ActionImpl
  active: boolean
}

const RenderItem = forwardRef(({ item, active }: RenderItemProps, ref) => {
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
})

function RenderResults() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <GroupName>{item}</GroupName>
        ) : (
          <RenderItem item={item} active={active} />
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
