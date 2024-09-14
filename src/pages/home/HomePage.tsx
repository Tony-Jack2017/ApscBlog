import {Fragment} from "react";

import ContainerLayout from "../../layouts/ContainerLayout";
import SidebarLayout from "../../layouts/SidebarLayout";
import {GridLayout, LatticeLayout} from "../../layouts/components/common/RowColumn";
import BlogItem from "../../components/page/BlogItem";
import CardItem from "../../components/page/CardItem";
import Avatar from "../../components/common/Avatar";

import HomeBanner from "../../resource/page/home/home-banner.jpg"
import BlogAssort1 from "../../resource/page/home/blog-assort-1.jpg"
import BlogAssort2 from "../../resource/page/home/blog-assort-2.jpg"
import BlogAssort3 from "../../resource/page/home/blog-assort-3.png"
import BlogAssort4 from "../../resource/page/home/blog-assort-4.jpg"
import AvatarImg from "../../resource/common/avatar.jpg"


const blogList = [1, 2]
const typeList = ["Design", "Web", "Golang", "Other"]
const blogCover = [BlogAssort1, BlogAssort2, BlogAssort3, BlogAssort4]

const HomePage = () => {

    return (
        <div className="home-page">
            <ContainerLayout fullWidth={true} style={{padding: 0}}>
                <section className="section section-1">
                    <div className="banner-bg">
                        <img src={HomeBanner} alt="banner" />
                    </div>
                    <div className="hero-banner">
                        <p className="title" style={{textTransform: "uppercase"}}>
                            The Best Fashion,<br/>
                            5 Outfits for a Party.
                        </p>
                    </div>
                </section>
            </ContainerLayout>
            <ContainerLayout style={{padding: "90px 0"}}>
                <section className="section section-2">
                    <SidebarLayout gap={32}>
                        <div className="blog-popular">
                            <GridLayout column={1} gap={32}>
                                {
                                    blogList.map((item, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <LatticeLayout>
                                                    <BlogItem data={null} type="two"/>
                                                </LatticeLayout>
                                            </Fragment>
                                        )
                                    })
                                }
                            </GridLayout>
                        </div>
                        <div className="blog-assort">
                            <GridLayout column={1} sameRow={true} style={{height: "100%"}} gap={32}>
                                {
                                    typeList.map((item, index) => {
                                        return (
                                            <LatticeLayout key={index}>
                                                <CardItem style={{height: "100%"}} cover={blogCover[index]}>
                                                    { item }
                                                </CardItem>
                                            </LatticeLayout>
                                        )
                                    })
                                }
                            </GridLayout>
                        </div>
                    </SidebarLayout>
                </section>
            </ContainerLayout>
            <ContainerLayout style={{padding: "90px 0"}}>
                <section className="section section-3">
                    <SidebarLayout gap={32} leftSpan={16} rightSpan={8}>
                        <div className="blog-list">
                            <GridLayout gap={32} column={2}>
                                {
                                    blogList.map((item, index) => {
                                        return (
                                            <LatticeLayout key={index}>
                                                <BlogItem data={null} type="one" />
                                            </LatticeLayout>
                                        )
                                    })
                                }
                            </GridLayout>
                        </div>
                        <div className="blog-author">
                            <GridLayout sameRow={false} column={1} style={{height: "100%"}}>
                                <LatticeLayout>
                                    <div className="author-avatar">
                                        <Avatar avatar={AvatarImg} size={160} />
                                    </div>
                                </LatticeLayout>
                                <LatticeLayout>
                                    <p className="author-name">
                                        JOHN ASTON
                                    </p>
                                </LatticeLayout>
                                <LatticeLayout>
                                    <div className="author-description">
                                        Hi, I am John Aston. Duis autem vel eum dolor in hendrerit in vulputate velit esse mole consequat, vel illum dolore eu feugiat nulla lisis at vero eros et accumsan et iusto.
                                    </div>
                                </LatticeLayout>
                            </GridLayout>
                        </div>
                    </SidebarLayout>
                </section>
            </ContainerLayout>
        </div>
    )
}

export default HomePage