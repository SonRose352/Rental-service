import { Logo } from "../../components/logo/logo";

function PageNotFound() {
  return (
    <div className="page page--gray page--not-found">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--not-found">
        <div className="container">
          <section className="not-found">
            <h1 className="not-found__title">404</h1>
            <h2 className="not-found__subtitle">Page not found</h2>
            <p className="not-found__text">
              The page you are looking for doesn't exist or another error occurred.
            </p>
            <a className="not-found__link" href="main.html">
              Go back to the main page
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}

export { PageNotFound };