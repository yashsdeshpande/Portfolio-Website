import { FaNodeJs } from "react-icons/fa"
import { FaPython } from "react-icons/fa6"
import { RiReactjsLine } from "react-icons/ri"
import { SiCplusplus, SiExpress, SiJavascript, SiMongodb, SiMysql } from "react-icons/si"

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl"> Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="p-4">
            <SiJavascript className="text-7xl text-yellow-400" />
        </div>
        <div className="p-4">
            <SiMongodb className="text-7xl text-green-600" />
        </div>
        <div className="p-4">
            <SiExpress className="text-7xl" />
        </div>
        <div>
            <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
            <FaNodeJs className="text-7xl text-green-400" />
        </div>
        <div className="p-4">
            <SiMysql className="text-7xl" />
        </div>
        <div className="p-4">
            <FaPython className="text-7xl text-yellow-400" />
        </div>
        <div className="p-4">
            <SiCplusplus className="text-7xl text-blue-600" />
        </div>
      </div>
    </div>
  )
}

export default Technologies
