import { Head } from 'minista'


export default (props) => {
  const {
    children,
    title,
    url
  } = props


  const navItems = [
    { href: '/', label: 'Home'},
    { href: '/catalogue', label: 'Catalogue'},
    { href: '/categories', label: 'Categories'}
  ]

  return (
    <>
      <Head
        htmlAttributes={{ lang: "en" }}
      >
        <title>Магазин замков | {title}</title>
      </Head>
      <header>
        <nav>
          <ul>
            {navItems.map(({href, label}, index) => (
              <li key={index}>
                <a
                  className={url === href ? 'active' : ''}
                  href={href}
                >{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}
