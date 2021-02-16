import React, {useEffect} from 'react'

export default function Tabs(props) {

  const [activeTab, setActiveTab] = React.useState(0);

  useEffect(()=>{
    props.getActiveTab(activeTab);
  },[props, activeTab]);

  return (
    <div className="mt-16 px-2 sm:px-0 sm:mb-28 mb-20">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">Select a tab</label>
        <select 
          id="tabs" 
          name="tabs" 
          value={activeTab}
          className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          onChange={(e)=>setActiveTab(e.target.value)}
        >
          {props.tabs.map((tab, index)=><option key={index} value={index}>{tab}</option>)}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="">
          <nav className="-mb-px flex" aria-label="Tabs">
            {props.tabs.map((tab, index)=>(
              <div key={index} onClick={()=>setActiveTab(index)} className={`${index === activeTab ? 'activeTab' : 'inActiveTab'} w-1/4 py-4 px-1 text-center border-b-4 font-medium text-base cursor-pointer`}>
                {tab}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}