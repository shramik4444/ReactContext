import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'
const ConfigurationController = () => {
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent,
          onToggleShowLeftNavbar,
          onToggleShowRightNavbar,
        } = value
        const onchangeContext = () => {
          onToggleShowContent()
        }

        const onchangeLeftnavbar = () => {
          onToggleShowLeftNavbar()
        }

        const onchangeRightnavbar = () => {
          onToggleShowRightNavbar()
        }

        return (
          <div className="bg-cont">
            <h1>Layout</h1>
            <div className="checkboxcont">
              <label>
                <input
                  checked={showContent}
                  type="checkbox"
                  onChange={onchangeContext}
                />
                Content
              </label>
              <label>
                <input
                  checked={showLeftNavbar}
                  type="checkbox"
                  onChange={onchangeLeftnavbar}
                />
                Left Navbar
              </label>
              <label>
                <input
                  checked={showRightNavbar}
                  type="checkbox"
                  onChange={onchangeRightnavbar}
                />
                Right Navbar
              </label>
            </div>
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default ConfigurationController
