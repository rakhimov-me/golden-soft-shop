import Hero from "@/pages/sections/Hero";
import Stat from "@/pages/sections/Stat";
import Features from "@/pages/sections/Features";
import Categories from "@/pages/sections/Categories";
import Callback from "@/pages/sections/Callback";
import Popular from "@/pages/sections/Popular";

export const metadata = {
  title: 'Home',
}

export default function () {
  return (
    <>
      <Hero/>
      <Stat />
      <Features />
      <Categories />
      <Popular />
      <Callback />
    </>
  )
}
