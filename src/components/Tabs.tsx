import { ReactNode, useState } from "react"

interface TabsProps {
    tabList: string[]
    children: ReactNode[],
    tabContentStyle: string
}

export default function Tabs({ tabList, children, tabContentStyle }: TabsProps) {

    const [tabIndex, setTabIndex] = useState(0)

    const onTabClick = (val: number) => {
        setTabIndex(val)
    }

    return (
        <>
            <div>
                <div className="flex sticky top-0 bg-white pt-4">
                    {
                        tabList.map((tab, index) => {
                            return <button key={index} onClick={() => onTabClick(index)} className={`px-4 pb-2 ${index === tabIndex ? "border-b-2 border-black" : ""}`}>{tab}</button>
                        })
                    }
                </div>
                <div className={tabContentStyle}>
                    {children[tabIndex]}
                </div>
            </div>
        </>
    )
}