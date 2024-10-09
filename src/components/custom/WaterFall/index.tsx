import {forwardRef, Fragment, ReactNode} from "react";
import classNames from "classnames";
import {useImmerReducer} from "use-immer";

interface WaterFall {
  list?: any[]
  itemNode: (item: any) => ReactNode
  screen: {
    number: number
  }
}

const stateReducer = (draft:any, action:any) => {
  let min = draft[0].height;
  let minIndex = 0;
  for (let i = 1; i < draft.length; i++) {
    if (draft[i] < min) {
      minIndex = i
      min = draft[i].height;
    }
  }
  switch (action.type) {
    case "add_new":
      draft[minIndex].children.push(action.payload.item)
      draft.minHeight = min
      break;
  }
}

const WaterFall = forwardRef<HTMLDivElement, WaterFall>((props, ref) => {

  const {
    list = [],
    itemNode,
    screen
  } = props

  console.log(list)


  const [state, dispatch] = useImmerReducer(stateReducer, {
    minHeight: 0,
    list: Array.from({length: screen.number}, () => ({ height: 0, children: [] }))
  })

  console.log(dispatch)


  const innerClass = classNames([
    ""
  ])

  const innerStyle = {}

  return (
    <div ref={ref} className="water-fall-container">
      <div className={innerClass} style={innerStyle}>
        {
          state.list.map((item, index) => (
            <div className="col">
              {
                <Fragment key={index}>
                  {
                    item.children.map((child, indexChild) => (
                      <Fragment key={indexChild}>
                        { itemNode(child) }
                      </Fragment>
                    ))
                  }
                </Fragment>
              }
            </div>
          ))
        }
      </div>
    </div>
  )
})

export default WaterFall