import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import PortfolioAdvisor from "../src/components/portfolioAdvisor"

export default function PortfolioAdvisorPage () {

  const { riskLevel } = useSelector((store) => store.financialAdvisor);

  const router = useRouter();

  useEffect(()=>{
    if(!riskLevel){
        router.push("/riskProfiler")
    }
  });

  return (
    <>
      {riskLevel>0 && 
        <PortfolioAdvisor/>
      }
    </>
  )
}