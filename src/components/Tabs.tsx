import { ReactNode, useState } from "react"

interface TabsProps {
    tabList: string[]
    children: ReactNode[]
}

export default function Tabs({ tabList, children }: TabsProps) {

    const [tabIndex, setTabIndex] = useState(0)

    const onTabClick = (val: number) => {
        setTabIndex(val)
    }

    return (
        <>
            <div className="flex">
                {
                    tabList.map((tab, index) => {
                        return <button onClick={() => onTabClick(index)} className={`px-4 pb-2 ${index === tabIndex ? "border-b-2 border-black" : ""}`}>{tab}</button>
                    })
                }
            </div>
            <div className="mt-4">
                {children[tabIndex]}
            </div>
        </>
    )
}