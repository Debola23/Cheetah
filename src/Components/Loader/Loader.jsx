import Style from './Loader.module.css'

export const Loader = () => {

  return (
    <div className={Style.loader}>
      <div className={Style.loader}>
        <span><span></span><span></span><span></span><span></span></span>
        <div className={Style.base}>
          <span></span>
          <div className={Style.face}></div>
        </div>
      </div>
      <div className={Style.longfazers}>
        <span></span><span></span><span></span><span></span>
      </div>
    </div>
  )
}
