// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'
const Body = () => {
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        console.log(showContent)

        return (
          <div className="bodycont">
            {showLeftNavbar ? (
              <div className="firstthirdcont">
                <h1>Left Navbar Menu</h1>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
            ) : null}

            {showContent ? (
              <div className="secondcont">
                <h1>Content</h1>
                <p>Lorem ipsum</p>
                <p>dsdsd sdddd dsdsd sd dsd sds d dsd sdsdsdsd sds ds d d d d s d dd ds ds dsd sddsds sdds</p>
              </div>
            ) : null}

            {showRightNavbar ? (
              <div className="firstthirdcont">
                <h1>Right Navbar Menu</h1>
                <div className="divcont">Ad 1</div>
                <div className="divcont">Ad 2</div>
              </div>
            ) : null}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
