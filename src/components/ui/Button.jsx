import { Link } from 'react-router-dom'
import { forwardRef } from 'react'

const variants = {
  primary: 'bg-navy-950 text-ivory hover:bg-teal-700 focus-visible:bg-teal-700',
  secondary: 'bg-transparent text-navy-950 border border-navy-900/20 hover:border-navy-950 hover:bg-navy-950/[0.03]',
  teal: 'bg-teal-600 text-white hover:bg-teal-700',
  ghost: 'bg-transparent text-navy-700 hover:text-teal-700',
  light: 'bg-white text-navy-950 hover:bg-teal-50',
}

const sizes = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-3.5 text-[0.95rem]',
  sm: 'px-4 py-2 text-sm',
}

const Button = forwardRef(function Button(
  { to, href, variant = 'primary', size = 'md', className = '', children, icon: Icon, iconPosition = 'right', ...props },
  ref,
) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-out active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="h-4 w-4" aria-hidden="true" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="h-4 w-4" aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button ref={ref} className={classes} {...props}>
      {content}
    </button>
  )
})

export default Button
