import './Button.scss'
import classNames from 'classnames'

const Button = ({ className, label }) => {
  return (
    <button className={classNames(className, 'button')} data-tooltip={label}>
      <span className="button__label">{label}</span>
    </button>
  )
}

export default Button