import Loading from './Loading';
import loadingAnimation from "../loading/loading.json"


const SuspenseContract = () => {
  return (
    <div className="w-full h-screen">
        <div className=" flex items-center justify-center h-full">
            <Loading animation={loadingAnimation}/>
        </div>
    </div>
  )
}

export default SuspenseContract