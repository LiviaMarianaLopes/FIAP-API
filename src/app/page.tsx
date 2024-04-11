import Image from "next/image";
import Person from "@/componentes/Person";
interface Item{
  name: string;
  address: string;
  phone: string;
  email: string;
  status: string
}

const dataPerson: Item[] = [
  {
    name: 'Lívia',
    address: 'rua da livia',
    phone: '1198332376',
    email: 'livia@email.com',
    status: 'success'
  },
  {
    name: 'Celeste',
    address: 'rua da celeste',
    phone: '1198234476',
    email: 'celeste@email.com',
    status: 'success'
  }, {
    name: 'Luana',
    address: 'rua da luana',
    phone: '1198343216',
    email: 'luana@email.com',
    status: 'success'
  }, {
    name: 'Julia',
    address: 'rua da julia',
    phone: '119834476',
    email: 'julia@email.com',
    status: 'error'
  }
]

export default function Home() {
  return (
    <main className="">
      {
        dataPerson.map((item: Item, index) => {
          return(
            <Person
            key ={index}
            name={item.name}
            address={item.address}
            phone={item.phone}
            email={item.email}
            status={item.status}/>
          )
        })
      }
      
    </main>
  );
}
