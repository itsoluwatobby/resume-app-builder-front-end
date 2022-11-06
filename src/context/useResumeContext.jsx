import { useContext } from "react"
import { ResumeData } from "./ResumeData"

const useResumeContext = () => {
  return useContext(ResumeData)
}

export default useResumeContext