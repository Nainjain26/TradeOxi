// import Image from "next/image";
import Numbers from "./components/Numbers";
import Accounts from "./components/Accounts";
import Accrodions from "./components/Accrodions";

import Cryptopage from "./components/Cryptopage";
import Process from "./components/Process";
import Testimonals from "./components/Testimonals";
import Download from "./components/Download";
import Hero from "./components/Hero";

export default function Home() {
  return (
<div>
    <Hero/>
    <Accrodions/>
     <Accounts/>
    <Numbers/>
    <Download/>
    <Process/>
    <Testimonals/>
    <Cryptopage/>
   
</div>
  );
}
