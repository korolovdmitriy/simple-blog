import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React and Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src="https://images.pexels.com/photos/852793/pexels-photo-852793.jpeg?cs=srgb&dl=pexels-garon-piceli-852793.jpg&fm=jpg" alt="" />
    </div>
  )
}
