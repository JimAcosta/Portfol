import Icon from '../Icon/Icon'
import './Button.css'

// Renderiza <a> cuando recibe `href` y <button> en caso contrario.
export default function Button({
  children,
  href,
  variant = 'primary',
  icon,
  onClick,
  type = 'button',
  external = false,
  className = '',
}) {
  const classes = `btn btn--${variant} ${className}`.trim()
  const content = (
    <>
      <span>{children}</span>
      {icon && <Icon name={icon} size={18} />}
    </>
  )

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {content}
    </button>
  )
}
