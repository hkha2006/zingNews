import './index_header.css'
const Header = () => {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img className='logo' src='https://static-znews.zingcdn.me/images/logo-zing-home.svg' />
          <span className='text-under-logo'>Tri thức trực tuyến</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Xuất bản
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/books">
                Sách
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Thế giới
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Kinh doanh
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Công nghệ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sức khỏe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Thể thao
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Giải trí
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Đời sống
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sức khỏe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Du lịch
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Lifestyle
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <a href='/admin'>
              <i className="fa fa-user-o" aria-hidden="true"></i>
            </a>
            <a href='/logout'>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
            </a>
          </form>
        </div>
      </nav>
    </div>
  )
};
export default Header;
