import { Map, UserData } from "@/components/features"


const HomePage = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto items-center px-6 space-y-60">
      <UserData />
      <Map />
    </div>
  )
}

export default HomePage
