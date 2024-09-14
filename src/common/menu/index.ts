
export type MenuList = {
    title: string
    path?: string
    children?: MenuList[]
    icon?: string
    itemType: "title" | "icon" | "all"
    active?: boolean
}

export interface HeaderMenu extends MenuList {

}

const HeaderNav:HeaderMenu[] = [
    { title: "Home", path: "/home", itemType: "title", active: false },
    { title: "Blog", path: "/blog/list", itemType: "title", active: false },
    {
        title: "Awesome", itemType: "title", active: false,
        children: [
            { title: "Project", path: "/project", itemType: "title", active: false },
            { title: "Contact", path: "/contact", itemType: "title", active: false },
            { title: "Author", path: "/author", itemType: "title", active: false },
        ]
    },
    { title: "About", path: "/about", itemType: "title", active: false },
    { title: "Contact", path: "/contact", itemType: "title", active: false }
]

const ArticleTypeMenu = [
    { title: "Design", icon: "design" },
    { title: "Web", icon: "web" },
    { title: "Golang", icon: "golang" },
    { title: "Interest", icon: "interest" },
    { title: "Other", icon: "other" },
]

const ContactMenu = [
    { title: "Twitter", icon: "icon-twitter-line" },
    { title: "WeChat", icon: "icon-wechat-line" },
    { title: "QQ", icon: "icon-qq-line" },
    { title: "FaceBook", icon: "icon-facebook-circle-line" },
]

export {
    HeaderNav,
    ArticleTypeMenu,
    ContactMenu
}