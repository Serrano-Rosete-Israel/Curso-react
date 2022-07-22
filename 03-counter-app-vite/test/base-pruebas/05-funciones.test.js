import { getUser } from '../../src/base-pruebas/05-funciones';
import { getUsuarioActivo } from '../../src/base-pruebas/05-funciones';


describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'Isra123'
        };
        const user = getUser();
        
        expect(testUser).toEqual(user);
    
    });    

    test('getUsuarioActivo debe retornar un objeto', ()=>{
        const name = 'isra';

        const user = getUsuarioActivo(name);

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        })
    })

    
});

