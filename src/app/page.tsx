import Banner from "@/components/Banner";
import Card from "@/components/Card";
import ModalState from "@/components/ModalState";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Banner />
      <div className="flex flex-col items-center justify-center text-3xl">
        <h1 className="mt-20">New Arrivals</h1>
      </div>
      <Card />
      <ModalState 
        title="Cadastrar Produto" 
        textButton="Cadastrar Produto" 
        classNameButton="w-52 mb-16"  
      />
    </div>
  );
}
