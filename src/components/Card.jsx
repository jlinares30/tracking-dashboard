import style from './Card.module.css'
import EllipsisSVG from '../img/icon-ellipsis.svg'

function getColor(category) {
  switch (category) {
    case 'Work':
      return '--Light-orange'
    case 'Play':
      return '--Soft-blue'
    case 'Study':
      return '--Light-red'
    case 'Exercise':
      return '--Lime-green'
    case 'Social':
      return '--Violet'
    case 'Self Care':
      return '--Soft-yellow'
    default:
      return 'black'
  }
}
function Card({category, time, previousTime, categoryImg}) {
  return (
    <div className={style.container}> 
      <div className={style.categoryImg} style={{backgroundColor: `var(${getColor(category)})`}}>
        <img className={style.img}  src={categoryImg} alt="category img" />
      </div> 
      <div className={style.containerCard} >
        <div className={style.category}>
            <div>
              {category}
            </div>
            <div className={style.ellipsis}>
              <img src={EllipsisSVG} alt="ellipsis img" />
            </div>
        </div>
        <div>
          <div className={style.time}> 
            {time}hrs
          </div>
          <div className={style.previousTime}>
            Last Week - {previousTime}hrs
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;