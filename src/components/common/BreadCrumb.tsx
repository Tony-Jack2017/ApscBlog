import React, {Fragment, ReactNode} from "react";

type CrumbType = {
    title: string
    path?: string,
    icon?: string
}

export const CrumbList = [
    { title: "Home", path: "/home", icon: "" },
    { title: "Blog", path: "/blog", icon: "" },
    { title: "Title" }
]

interface BreadCrumbItf {
    crumbList?: CrumbType[]
}

interface CrumbItemItf {
    children: ReactNode
}

const CrumbItem:React.FC<CrumbItemItf> = (props) => {

    const { children } = props

    return (
        <div className="crumb-item">
            { children }
        </div>
    )
}

const BreadCrumb:React.FC<BreadCrumbItf> = (props) => {

    const { crumbList } = props

    return (
        <div className="bread-crumb">
            {
                CrumbList.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <CrumbItem>
                                <span>{ item.title }</span>
                            </CrumbItem>
                            { index < (CrumbList.length - 1) ? <i className="iconfont icon-arrow-down-s-line" style={{transform: "rotate(-90deg)", fontSize: "20px", fontWeight: 500}}></i> : "" }
                        </Fragment>
                    )
                })
            }
        </div>
    )
}

export default BreadCrumb