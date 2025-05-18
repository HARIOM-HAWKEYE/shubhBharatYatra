export function Heading({biggerHeading,smallerHeading,children}){
 
    return <div className="locationHeading w-[80%] mx-auto  my-20">
    <p className="text-[25px] text-[grey] pl-[6px] ">{smallerHeading}</p>
    <div id="incredibleContainer" className="flex justify-between gap-2">
       <span className="text-[70px] font-semi bold" >{biggerHeading}</span>
       <span className="text-[20px] pt-[50px]">{children}</span>
    </div>
  </div>





}