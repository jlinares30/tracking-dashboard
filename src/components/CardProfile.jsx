import style from './CardProfile.module.css'



function CardProfile({name, imgProfile, setTimeFrame}) {
  const onClickDaily = async () => {
    setTimeFrame('daily')
    
  }
  const onClickWeekly = async () => {
    setTimeFrame('weekly')
  }
  const onClickMonthly = async () => {
    setTimeFrame('monthly')
  }
  return (
    <div className={style.container}>
        <div className={style.profile}>
            <img className={style.imgProfile} src={imgProfile} alt="profile" /> 
            <p>
              Report for <span className={style.name}>{name}</span>
            </p>
        </div>
        <div className={style.buttons}>
            <a className={style.button} onClick={onClickDaily}>Daily</a>
            <a className={style.button} onClick={onClickWeekly}>Weekly</a>
            <a className={style.button} onClick={onClickMonthly}>Monthly</a>            
        </div>
    </div>
  );
}

export default CardProfile;