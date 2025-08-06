import './Icon.scss'
import classNames from 'classnames'
import { Icon as MinistaIcon } from 'minista'

const Icon = (props) => {
  const {
    className,
    name,
    hasFill = false,
    iconSize = 32,
  } = props

  return (
    <span className={classNames(className, 'icon')}>
      <MinistaIcon
        className={classNames({
          [`${className}-svg`]: className,
          'icon__svg': true,
        })}
        iconId={name}
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
        style={{ maxWidth: `${iconSize}px`, maxHeight: `${iconSize}px` }}
      />
    </span>
  )
}

export default Icon