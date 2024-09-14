import ContainerLayout from "../../layouts/ContainerLayout";
import BreadCrumb from "../../components/common/BreadCrumb";
import {GridLayout, LatticeLayout} from "../../layouts/components/common/RowColumn";
import Banner from "../../resource/page/about/banner.jpg"
import {ContactMenu} from "../../common/menu";

const AboutPage = () => {
    return (
        <div className="about-page">
            <ContainerLayout style={{ paddingTop: "40px" }}>
                <BreadCrumb />
                <GridLayout column={2} style={{ paddingTop: "20px" }} gap={36}>
                    <LatticeLayout>
                        <img src={Banner} alt="banner" />
                    </LatticeLayout>
                    <LatticeLayout>
                        <div className="visit">
                            <p className="visit-title">
                                Thank you for visit out my website.
                            </p>
                            <div className="visit-desc">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores sit amet vel facilisis beatae vitae dicta sunt.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.
                            </div>
                        </div>
                        <div className="follow">
                            <p className="follow-title">Follow us</p>
                            <div className="follow-list">
                                {
                                    ContactMenu.map((item, index) => {
                                        return (
                                            <div className="follow-item" key={index}>
                                                <i className={`iconfont ${item.icon}`} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </LatticeLayout>
                </GridLayout>
            </ContainerLayout>
        </div>
    )
}

export default AboutPage