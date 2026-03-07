// app/chamaconnect/page.tsx
"use client";
import Hero from "@components/chama-connect/Hero";
import Dashboard from "@components/chama-connect/Dashboard";
import LoanCalculator from "@components/chama-connect/LoanCalculator";
import Distribution from "@components/chama-connect/Distribution";

const ChamaConnectPage = () => {
  return (
    <>
      <Hero />
      <Dashboard />
      <LoanCalculator />
      <Distribution />
    </>
  );
};

export default ChamaConnectPage;