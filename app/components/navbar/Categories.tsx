'use client';

import { usePathname, useSearchParams } from "next/navigation";
import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = () => [
    {
        label: 'Acerca de',
        description: 'Quienes somos',
    },
    {
        label: 'Mapa',
        description: 'Ubicaciones de puntos donde hubo incidentes o mapa para reportar incidentes',
    },
    {
        label: 'Eventos',
        description: 'Eventos a realizarse, talleres de amor propio, charlas motivacionales, voces valientes',
    },
    {
        label: 'Donaciones',
        description: 'Donaciones para el foro',
    },
    {
        label : 'Contacto',
        description: 'Formulario de contacto',
    },
    
]

const Categories = () => {

    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }


    return (
       <Container>
            <div
                className="
                    pt-4
                    flex
                    flex-row
                    items-center
                    justify-between
                    overflow-x-auto
                "   
            >
                {categories().map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected = {category === item.label}
                    />
                ))}

            </div>
       </Container>
    );
}

export default Categories;