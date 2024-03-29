import { styles } from '../styles';
import { github, linkedin, codewars, buymeacoffee } from '../assets';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <foot>
    
      <div className={`${styles.paddingX} w-full flex items-center py-5 bottom-0 z-20 justify-end bg-tertiary gap-3`}>
        <div className={`${styles.paddingX} w-full flex `}>

          <p className="justify-font text-white-100 text-[10px]">
            <a href="https://skfb.ly/orSpX/" rel="noreferrer" target="_blank">
              <span className="text-secondary hover:text-primary">MacBook Pro</span>
            </a> model by 
            <a href="https://sketchfab.com/KangaroOz-3D" rel="noreferrer" target="_blank">
              <span className="text-secondary hover:text-primary"> KangaroOz 3D </span>
            </a> is licensed under 
            <a href="http://creativecommons.org/licenses/by-nc/4.0/" rel="noreferrer" target="_blank">
              <span className="text-secondary hover:text-primary"> Creative Commons Attribution-NonCommercial</span>
            </a>. All product & company names are trademarks™️ or registered®️ trademarks of their respective holders.
            Use of them does not imply any affiliation with or endorsement by them. Icons by Icons8.
          </p>
        </div>
        <div className={`${styles.paddingX} flex items-center gap-1`}>
          <Link to="https://www.linkedin.com/in/farzanimanzadeh/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn" width={50} height={50}/>
          </Link>
          <br/>
          <Link to="https://github.com/Farzan-I" target="_blank" rel="noreferrer">
            <img src={github} alt="GitHub" width={50} height={50}/>
          </Link>
          <br/>
          <Link to="https://www.codewars.com/users/fazzy15" target="_blank" rel="noreferrer">
            <img src={codewars} alt="Codewars" width={40} height={40}/>
          </Link>
          <br/>
          <Link to="https://www.buymeacoffee.com/farzan" target="_blank" rel="noreferrer">
            <img src={buymeacoffee} alt="BuyMeACoffee" width={30} height={30}/>
          </Link>
        </div>
      </div>
    </foot>
  )
}

export default Footer