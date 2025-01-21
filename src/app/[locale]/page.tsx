import Map from "@/components/features/map/Map"
import UserData from "@/components/features/userData/UserData"

const HomePage = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto items-center px-6 space-y-52">
      <UserData />
      <Map />
    </div>
  )
}

export default HomePage
