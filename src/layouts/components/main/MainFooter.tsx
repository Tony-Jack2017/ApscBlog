import logoFooter from "../../../resource/common/logo/logo-footer.png"
import {ArticleTypeMenu, ContactMenu} from "../../../common/menu";
import Divider from "../../../components/common/Divider";


const MainFooter = () => {
    return (
        <footer>
            <div className="about-info">
                <div className="base-info">
                    <img src={logoFooter} alt="logo"/>
                    <p style={{ marginTop: "20px" }}>
                        Lorem ipsum is simply dummy text the printing and typesetting industry
                        has been the industry's standard text ever since.
                    </p>
                </div>
                <div className="other-info">
                    <div className="info-item">
                        <span>gan19991118@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="tag-nav__contact-way">
                <Divider color="white">
                    <span style={{fontSize: "24px", fontWeight: 500}}>TAG LIST</span>
                </Divider>
                <div className="tag-list">
                    {
                        ArticleTypeMenu.map((item, index) => {
                            return (
                                <div className="tag-item" key={index}>
                                    <span>{item.title}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <Divider color="white">
                    <span style={{fontSize: "24px", fontWeight: 500}}>CONTACT</span>
                </Divider>
                <div className="contact-list">
                    {
                        ContactMenu.map((item, index) => {
                            return (
                                <div className="contact-item" key={index}>
                                    <i className={`iconfont ${item.icon}`} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </footer>
    )
}

export default MainFooter