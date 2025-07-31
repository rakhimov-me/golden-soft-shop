import './Icon.scss'
import classNames from 'classnames'
import { Icon as MinistaIcon } from 'minista'

const Icon = (props) => {
  const {
    className,
    name,
    hasFill = false,
  } = props

  return (
    <span className={classNames(className, 'icon')}>
      <MinistaIcon
        className={classNames({
          [`${className}-svg`]: className,
          'icon__svg': true,
        })}        iconId={name}
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
      />
    </span>
  )
}

export default Icon