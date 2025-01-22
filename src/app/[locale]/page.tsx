import { Map, TextEditor, UserData } from "@/components/features"


const HomePage = () => {
  return (
    <div className="space-y-60 my-20">
      <UserData />
      <Map />
      <TextEditor />
    </div>
  )
}

export default HomePage
