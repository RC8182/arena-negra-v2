import Formulario from "@/components/dashboard/formularios/formulario";

export default function Dashboard() {

  return (
    <div className="flex m-5">
      <Formulario type={'portada'}/>
      <Formulario type={'galeria'}/>
      <Formulario type={'especialidades'}/>    
    </div>
  );
}


