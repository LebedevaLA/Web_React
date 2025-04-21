import { Link } from 'react-router-dom'; 
export default function AboutUs(){
    return (
      <div className="another_info">
            <div className="columns">
                <div className="column_container1">
                    <p style={{marginRight: '40px' ,marginLeft: '40px' }}>QPIC</p>
                    <div>
                        <p className="line">Избранное</p>
                        <p>
                            <Link to="/buy">Корзина</Link>
                        </p>
                        <p className="line">Контакты</p>
                    </div>
                </div>
                <div className="column_container2">
                    <div>
                        <p className="line">Условия сервиса</p>
                        <p className="line">Рус</p>
                    </div>
                    <a href="https://t.me/tel" >
                        <img src = "./src/assets/images/tel.jpg"className="tel"></img>
                    </a>
                </div>
            </div>
        </div>
    )
  }