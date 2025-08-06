import './Button.scss'
import classNames from 'classnames'
import Icon from '@/components/Icon'

const Button = (props) => {
  const {
    className,
    type = 'button',
    href,
    target,
    /**
     * '' (default) | 'transparent' | 'primary' | 'transparent-black' | 'menu'
     */
    mode = '',
    label,
    isLabelHidden = false,
    iconName,
    iconSize = 32,
    /**
     * 'before' | 'after'
     */
    iconPosition = 'before',
    hasFillIcon,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName ? (
    <Icon
      className={classNames(className ? `${className}-icon` : '', "button__icon")} // Проверка на undefined
      name={iconName}
      hasFill={hasFillIcon}
      iconSize={iconSize}
    />
  ) : null

  const componentClass = classNames(
    className,
    isLink ? 'a' : 'button',
    {
      [`${isLink ? 'a--' : 'button--'}${mode}`]: mode,
    }
  )

  return (
    <Component
      className={componentClass}
      title={title}
      aria-label={title}
      {...specificProps}
    >
      {iconPosition === 'before' && iconComponent}
      {!isLabelHidden && label && (
        <span className="button__label">{label}</span>
      )}
      {iconPosition === 'after' && iconComponent}
    </Component>
  )
}

export default Button