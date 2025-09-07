import Style from './ExploreProducts.module.css'

export const ExploreProducts = () => {
  return (
    <div className={Style.ExploreProducts}>
        <h2 className={Style.ExploreH}>
            Explore Our Products
        </h2>

        <div className="container max-w-none">
            <div className={Style.holder}>
                <div className={Style.card}>
                    <div className={Style.card1}>
                        <a href='#' className={Style.desc}>
                            Price<br/>Frendly
                        </a>  
                    </div>
                    <div className={Style.card2}>
                        <a href='#' className={Style.desc}>
                            Video<br/>Games
                        </a>  
                    </div>
                    <div className={Style.card3}>
                        <a href='#' className={Style.desc}>
                            Highest<br/>Ratings
                        </a>  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
