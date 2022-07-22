import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";
import { getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe retornar un heroe por ID', () => {
    
        const id = 1;
        const hero = getHeroeById(id);

        //console.log(hero);

        expect(hero).toEqual({id:1, name:'Batman', owner: 'DC'});
    });

        test('getHeroeById debe retornar undefined si no existe', () => {
    
            const id = 100;
            const hero = getHeroeById(id);
    
            //console.log(hero);

            expect(hero).toBeFalsy();
        });

        //tarea 
        //debe retornar un arreglo con los heroes de DC
        //length == 3
        //toEqual al arreglo filtrado

        //debe retornar un arreglo con los heroes de marvel 
        //length == 2


        test('getHeroeByOwner debe de regresar heroes de DC', () => {
            const owner = 'DC';
            const heroes = getHeroesByOwner(owner);

            expect(heroes.length).toBe(3);
            expect(heroes).toEqual([
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ]);

            expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner===owner));


        });

        //segunda prueba con marvel
        test('getHeroeByOwner debe de regresar heroes de Marvel', () => {
            const owner = 'Marvel';
            const heroes = getHeroesByOwner(owner);

            console.log(heroes);
            expect(heroes.length).toBe(2);
            expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner===owner));
        });
 })