import {Component} from 'react'
import Loader from 'react-loader-spinner'
import PackageDetails from '../PackageDetails'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Packages extends Component {
  state = {
    packagesList: [],
    isloading: true,
  }

  componentDidMount() {
    this.getPackagesData()
  }

  getPackagesData = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const {packages} = data
    const packageDetailsList = packages.map(each => {
      const packageDetails = {
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        description: each.description,
      }
      return packageDetails
    })
    this.setState({packagesList: packageDetailsList, isloading: false})
  }

  render() {
    const {packagesList, isloading} = this.state
    return (
      <>
        {isloading === true ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="packages-container">
            <h1 className="heading">Travel Guide</h1>
            <ul className="card-container">
              {packagesList.map(each => (
                <PackageDetails key={each.id} details={each} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default Packages
