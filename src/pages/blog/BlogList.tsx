import ContainerLayout from "../../layouts/ContainerLayout";
import SidebarLayout from "../../layouts/SidebarLayout";
import BreadCrumb from "../../components/common/BreadCrumb";
import BlogItem from "../../components/page/BlogItem";
import {GridLayout, LatticeLayout} from "../../layouts/components/common/RowColumn";
import CardItem from "../../components/page/CardItem";
import BlogAssort1 from "../../resource/page/blog/assort-1.jpg"
import BlogAssort2 from "../../resource/page/blog/assort-2.jpg"
import BlogAssort3 from "../../resource/page/blog/assort-3.jpg"
import BlogAssort4 from "../../resource/page/blog/assort-4.jpg"
import Avatar from "../../components/common/Avatar";
import Tag from "../../components/common/Tag";
import React from "react";

const blogList = [1, 2, 3, 4, 5, 6]
const typeList = ["Design", "Web", "Golang", "Other"]
const blogCover = [BlogAssort1, BlogAssort2, BlogAssort3, BlogAssort4]
const avatarList = [1, 2, 3, 4]

const BlogListPage = () => {
    return (
        <div className="blog-list-page">
            <ContainerLayout style={{ padding: "0 16px" }}>
                <SidebarLayout style={{ padding: "80px 0" }} leftSpan={16} rightSpan={8} gap={32}>
                    <section className="section section-1">
                        <div className="blog-list">
                            <div className="blog-list-header">
                                <BreadCrumb />
                            </div>
                            <div className="blog-list-content">
                                {
                                    blogList.map((item, index) => {
                                        return (
                                            <BlogItem key={index} data={null} type="two" />
                                        )
                                    })
                                }
                            </div>
                            <div className="blog-list-pagination">
                            </div>
                        </div>
                    </section>
                    <section className="section section-2">
                        <div className="part blog-assort">
                            <div className="blog-assort-header title">
                                Blog Assort
                            </div>
                            <div className="blog-assort-content">
                                <GridLayout column={1} sameRow={true} gap={32}>
                                    {
                                        typeList.map((item, index) => {
                                            return (
                                                <LatticeLayout key={index}>
                                                    <CardItem style={{height: "200px"}} showDark={false} cover={blogCover[index]}>
                                                        { item }
                                                    </CardItem>
                                                </LatticeLayout>
                                            )
                                        })
                                    }
                                </GridLayout>
                            </div>
                        </div>
                        <div className="part blog-author">
                            <div className="blog-author-header title">
                                Author List
                            </div>
                            <div className="blog-author-content">
                                {
                                    avatarList.map((item, index) => {
                                        return (
                                            <div className="author">
                                                <Avatar size="large" />
                                                <div className="author-content">
                                                    <p className="author-name">APSC BUILDER</p>
                                                    <Tag title="302" type="ban" icon="icon-article-line" />
                                                    <div className="view-action">
                                                        view
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </SidebarLayout>
            </ContainerLayout>
        </div>
    )
}

export default BlogListPage