import React from "react";
import classNames from "classnames";
import {GridLayout, LatticeLayout} from "../../layouts/components/common/RowColumn";
import BlogCover from "../../resource/common/blog-cover.jpg"
import Tag from "../common/Tag";

interface BlogItemItf {
    data: any
    type: "one" | "two" | "three"
}

const BlogItem:React.FC<BlogItemItf> = (props) => {

    const {
        type = "one",
        data
    } = props

    const classes = classNames(
        "blog-item",
        `item-type_${type}`
    )

    let innerState:any = {}

    switch (type) {
        case "one":
            innerState = {
                layout: {
                    column: 3,
                    coverSpan: 3,
                    contentSpan: 3,
                },
                info: {
                    header: {
                        list: [
                            { title: "12 Apr, 2022", icon: "icon-numbers-line", showIcon: false, tagType: "ban", customClass: "item-time" },
                            { title: "Flutter", icon: "icon-flutter-fill", showIcon: false, tagType: "text"  },
                        ]
                    },
                    footer: {
                        list: [
                            { title: "302", icon: "icon-article-line", showIcon: false, tagType: "ban" }
                        ]
                    }
                }
            }
            break;
        case "two":
            innerState = {
                layout: {
                    column: 7,
                    coverSpan: 4,
                    contentSpan: 3
                },
                info: {
                    header: {
                        list: [
                            { title: "Flutter", icon: "icon-flutter-fill", showIcon: true },
                            { title: "Apsc Builder", icon: "icon-account-circle-line", showIcon: true, tagType: "text" },
                        ]
                    },
                    footer: {
                        list: [
                            { title: "12 Apr, 2022", icon: "icon-numbers-line", showIcon: true, tagType: "ban" },
                            { title: "302", icon: "icon-article-line", showIcon: true, tagType: "ban" },
                        ]
                    }
                }
            }
            break;
    }

    return (
        <div className={classes}>
            <GridLayout column={innerState.layout.column} sameRow={false} gap={32}>
                <LatticeLayout spanColumn={innerState.layout.coverSpan}>
                    <div className="item-cover">
                        <img src={BlogCover} alt="cover" />
                    </div>
                </LatticeLayout>
                <LatticeLayout spanColumn={innerState.layout.contentSpan}>
                    <div className="item-content">
                        <div className="item-info item-info_header">
                            {
                                innerState.info.header.list.map((item:any, index:any) => {
                                    return (
                                        <div className={item.customClass} key={index}>
                                            <Tag title={item.title} type={item.tagType} icon={item.showIcon && item.icon} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <p className="item-title">
                            The best website template<br/>
                            layout for your business
                        </p>
                        <p className="item-description">
                            You need to be sure there isn’t anything<br /> embarrassing hidden in the middle of<br /> text...
                        </p>
                        <div className="item-info item-info_footer">
                            {
                                innerState.info.footer.list.map((item:any, index:any) => {
                                    return (
                                        <div key={index}>
                                            <Tag title={item.title} type={item.tagType} icon={item.icon} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </LatticeLayout>
            </GridLayout>
        </div>
    )
}

export default BlogItem