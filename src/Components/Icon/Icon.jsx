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
        iconId={name}
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
      />
      <a href="">dasldasd</a>
    </span>
  )
}

export default Icon