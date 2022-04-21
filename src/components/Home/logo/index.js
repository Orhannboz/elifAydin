import './index.scss'
import LogoTitle from '../../../assets/images/pp.png'
import Logo2 from '../../../assets/images/pp1.jpg'
import Upper from '../../../assets/images/upper.png'
import Pp from '../../../assets/images/pp2.jpg'
import Single from '../../../assets/images/single.png'
import { useState } from 'react'
import Imgcont from './Imgcont'

const Logo = () => {
  const [track, setTrack] = useState(0)
  const imgArray = [Pp,Logo2, LogoTitle, Single]

  const changeImg = () => {
    console.log(imgArray.length)
    if (track == imgArray.length - 1) {
      setTrack(0)
      console.log(track)
    } else {
      setTrack(track + 1)
      console.log(track)
    }
  }
  const changeImg2 = () => {
    if (track === 0) {
      setTrack(imgArray.length - 1)
    } else {
      setTrack(track - 1)
    }
  }

  return (
    <div className="imege">
      <Imgcont track={track} imgArray={imgArray} />
      <div className="buttons">
        <div className="upper">
          <img className="upper-img" src={Upper} alt="S" onClick={changeImg} />
        </div>
        <div className="upper1">
          <img className="upper-img" src={Upper} alt="S" onClick={changeImg2} />
        </div>
      </div>
    </div>
  )
}

export default Logo
